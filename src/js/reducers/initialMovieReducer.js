import {
  MOVIE_REQUEST,
  MOVIE_RECIEVED,
  API_ERROR,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_FALIURE,
  SEARCH_MOVIE_SUCCESS
} from "../constants/index";

const initialState = {
  movies: [],
  loading: false,
  errorMessage: "",
  query: ""
};

function initialMovieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_REQUEST:
      return { ...state, loading: true };
    case MOVIE_RECIEVED:
      return { ...state, movies: action.payload.data.results };
    case API_ERROR:
      return state;
    case SEARCH_MOVIE_REQUEST:
      return { ...state, loading: true };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.searchData.data.results,
        query: action.query
      };
    case SEARCH_MOVIE_FALIURE:
      return state;
    default:
      return state;
  }
}
export default initialMovieReducer;
