export function requestMovies() {
  return { type: "MOVIE_REQUEST" };
}

export function recievedMovies(payload) {
  return { type: "MOVIE_RECIEVED", payload };
}
