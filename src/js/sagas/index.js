import searchWatcher from "./search-saga";
import movieWatcher from "./api-saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([movieWatcher(), searchWatcher()]);
}
