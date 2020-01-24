const initialState = {
  movies: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "MOVIE_REQUEST":
      console.log(action.payload);
      return Object.assign({}, state, {
        movies: state.movies.concat(action.payload)
      });
    case "API_ERROR":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
export default rootReducer;
