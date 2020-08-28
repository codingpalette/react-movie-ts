
import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import axios from 'axios';

import {
    MOVIE_LOAD_REQUEST, MOVIE_LOAD_SUCCESS, MOVIE_LOAD_FAILURE
} from '../actions/movie'


function movieLoadAPI() {
    return axios.get('/movie/now_playing', {
        params: {
            api_key: 'a992d1fae6c06b990f53908e421ee199',
            language: 'ko',
        },
    });
}

function* movieLoad() {
    try {
        const res = yield call(movieLoadAPI )
        console.log(res)
        yield put({ // put은 dispatch 동일
            type: MOVIE_LOAD_SUCCESS,
            data: res.data
        });
    } catch (e) {
        console.error(e)
        yield put({
            type: MOVIE_LOAD_FAILURE,
            error: e.response.data
        })
    }
}

function* watchMovieLoad() {
    yield takeLatest(MOVIE_LOAD_REQUEST , movieLoad)
}

export default function* movieSaga() {
    yield all([
        fork(watchMovieLoad),
    ])
}
