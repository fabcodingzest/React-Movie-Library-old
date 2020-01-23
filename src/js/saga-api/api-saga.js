import { takeEvery, call, put } from 'redux-saga/effects';

export default function* watcherSaga() {
    yield takeEvery("MOVIE_REQUEST", workerSaga);
}

function* workerSaga() {
    
}