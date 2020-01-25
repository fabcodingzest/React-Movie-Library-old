import { takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";

function* watcherSaga() {
  yield takeEvery("MOVIE_REQUEST", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    console.log(payload);
    console.log(`data: ${payload}`);
    yield put({ type: "MOVIE_REQUEST", payload });
  } catch (error) {
    yield put({ type: "API_ERROR", payload: error });
  }
}
function getData() {
  const data = axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  );
  return data;
}

export default function* rootSaga() {
  yield all([watcherSaga()]);
}

// https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

// async function getData() {
//   const data = await axios.get(
//     "https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
//   );
