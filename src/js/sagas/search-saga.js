import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { searchSuccess } from "../actions/index";
import { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_FALIURE } from "../constants/index";
import api_key from "../api";

export default function* searchWatcher() {
  yield takeLatest(SEARCH_MOVIE_REQUEST, searchWorker);
}

function* searchWorker(action) {
  try {
    const payload = yield call(getData, action.query);
    console.log(payload.data.results);
    yield put(searchSuccess(payload));
  } catch (error) {
    yield put({
      type: SEARCH_MOVIE_FALIURE,
      payload: error
    });
  }
}
async function getData(searchValue) {
  const searchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}
    `);
  return searchResult;
}
