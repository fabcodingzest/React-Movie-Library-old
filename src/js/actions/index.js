import { MOVIE_REQUEST, MOVIE_RECIEVED } from "../constants/index";

export function requestMovies() {
  return { type: MOVIE_REQUEST };
}

export function recievedMovies(payload) {
  return { type: MOVIE_RECIEVED, payload };
}
