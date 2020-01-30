import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import initialMovieReducer from "../reducers/initialMovieReducer";
import rootSaga from "../sagas/index";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  initialMovieReducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(rootSaga);

export default store;
