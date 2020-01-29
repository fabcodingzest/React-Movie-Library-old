import { combineReducers } from "redux";
import initialMovieReducer from "./initialMovieReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({initialMovieReducer, searchReducer});
export default rootReducer;
