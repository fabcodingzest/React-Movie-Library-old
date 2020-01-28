import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { recievedMovies } from "../actions/index";
import { MOVIE_REQUEST, API_ERROR } from "../constants/index";
import api_key from "../api";

export default function* movieWatcher() {
  yield takeLatest(MOVIE_REQUEST, movieWorker);
}

function* movieWorker() {
  try {
    const payload = yield call(getData);
    yield put(recievedMovies(payload));
  } catch (error) {
    yield put({
      type: API_ERROR,
      payload: error
    });
  }
}
async function getData() {
  const data = axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  return data;
}
