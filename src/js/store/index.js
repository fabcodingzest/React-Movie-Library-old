import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import initialMovieReducer from "../reducers/initialMovieReducer";
import api_saga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  initialMovieReducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(api_saga);

export default store;
