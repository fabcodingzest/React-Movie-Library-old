// const initialState = {
//   movies: []
// };

function rootReducer(state = {}, action) {
  switch (action.type) {
    case "MOVIE_REQUEST":
      return { ...state, movies: action.payload.data.results };
    case "API_ERROR":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
export default rootReducer;
