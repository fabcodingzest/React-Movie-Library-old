import {
  MOVIE_REQUEST,
  MOVIE_RECIEVED,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_FALIURE,
  SEARCH_MOVIE_SUCCESS
} from "../constants/index";

export function requestMovies() {
  return { type: MOVIE_REQUEST };
}

export function recievedMovies(payload) {
  return { type: MOVIE_RECIEVED, payload };
}

export function searchRequest(searchValue) {
  return { type: SEARCH_MOVIE_REQUEST, query: searchValue };
}
export function searchSuccess(searchData) {
  return { type: SEARCH_MOVIE_SUCCESS, searchData };
}
export function searchFaliure() {
  return { type: SEARCH_MOVIE_FALIURE };
}
