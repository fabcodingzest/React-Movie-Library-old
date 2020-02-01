import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { searchSuccess } from "../actions/index";
import { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_FALIURE } from "../constants/index";
import api_key from "../api";
import history from "../history/history";

export default function* searchWatcher() {
  yield takeLatest(SEARCH_MOVIE_REQUEST, searchWorker);
}

function* searchWorker(action) {
  try {
    const payload = yield call(getData, action.query);
    // if (payload) {
    //   history.pushState(`/search/${action.query}`);
    // }
    yield put(searchSuccess(payload, action.query));
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
  console.log(searchResult);
  sessionStorage.setItem(
    "searchedMovies",
    JSON.stringify(searchResult.data.results)
  );
  sessionStorage.setItem("query", JSON.stringify(searchValue));
  console.log(sessionStorage);
  return searchResult;
}
