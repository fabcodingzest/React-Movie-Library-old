import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

export default function* watcherSaga() {
  yield takeEvery("MOVIE_REQUEST", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "MOVIE_REQUEST", payload });
  } catch (error) {
    yield put({ type: "API_ERROR", payload: error });
  }
}

function getData() {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  ).then(response => response.json());
}

// https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
