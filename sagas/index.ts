import { all, fork } from 'redux-saga/effects'
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.withCredentials = true;

import movieSaga from "./movie";

export default function* rootSaga() {
    yield all([
        fork(movieSaga),
    ])
}
