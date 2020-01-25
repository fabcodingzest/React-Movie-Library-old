const initialState = {
  movies: [],
  loading: false,
  errorMessage: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "MOVIE_REQUEST":
      return { ...state, loading: true };
    case "MOVIE_RECIEVED":
      return { ...state, movies: action.payload.data.results };
    case "API_ERROR":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
export default rootReducer;
