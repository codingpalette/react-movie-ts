import {LayoutDarkAction} from "./layout";

export const MOVIE_LOAD_REQUEST = 'MOVIE_LOAD_REQUEST' as const;
export const MOVIE_LOAD_SUCCESS = 'MOVIE_LOAD_SUCCESS' as const;
export const MOVIE_LOAD_FAILURE = 'MOVIE_LOAD_FAILURE' as const;

export interface movieRequestAction {
    type: typeof MOVIE_LOAD_REQUEST,
}

export const movieRequest = ():movieRequestAction => {
    return {
        type: "MOVIE_LOAD_REQUEST"
    }
}


export interface movieSuccessAction {
    type: typeof MOVIE_LOAD_SUCCESS,
    data: any
}

export const movieSuccess = (data: any):movieSuccessAction => {
    return {
        type: "MOVIE_LOAD_SUCCESS",
        data,
    }
}

export interface movieFailureAction {
    type: typeof MOVIE_LOAD_FAILURE,
    error: any
}

export const movieFailure = (error: any):movieFailureAction => {
    return {
        type: "MOVIE_LOAD_FAILURE",
        error,
    }
}
