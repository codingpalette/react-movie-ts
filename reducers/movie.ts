import produce from 'immer';

import {
    MOVIE_LOAD_REQUEST, MOVIE_LOAD_SUCCESS, MOVIE_LOAD_FAILURE,
    movieRequestAction, movieSuccessAction, movieFailureAction
} from '../actions/movie';



export interface MovieState {
    movieLoading: boolean,
    movieDone: boolean,
    movieError: any
    list: any,

    movieDetail: any,
    movieDetailLoading: boolean,
    movieDetailDone: boolean,
    movieDetailError: any
}

const initialState: MovieState = {
    movieLoading: false,
    movieDone: false,
    movieError: null,
    list: null,

    movieDetail: null,
    movieDetailLoading: false,
    movieDetailDone: false,
    movieDetailError: null
};

type MovieReducerActions = movieRequestAction | movieSuccessAction | movieFailureAction ;

const movieReducer = (prevState = initialState, action: MovieReducerActions) => {
    return produce(prevState, (draft) => {
        switch (action.type) {
            case MOVIE_LOAD_REQUEST:
                draft.movieLoading = true;
                draft.movieDone = false;
                draft.movieError = null
                break;
            case MOVIE_LOAD_SUCCESS:
                draft.movieLoading = false;
                draft.movieDone = true;
                draft.list = action.data;
                break;
            case MOVIE_LOAD_FAILURE:
                draft.movieLoading = false;
                draft.movieError = action.error;
                break;
            default:
                break;
        }
    })
}

export default movieReducer;


