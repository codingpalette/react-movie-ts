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


export const MOVIE_DETAIL_REQUEST = 'MOVIE_DETAIL_REQUEST' as const;
export const MOVIE_DETAIL_SUCCESS = 'MOVIE_DETAIL_SUCCESS' as const;
export const MOVIE_DETAIL_FAILURE = 'MOVIE_DETAIL_FAILURE' as const;

export interface movieDetailRequestAction {
    type: typeof MOVIE_DETAIL_REQUEST,
    data: any
}

export const movieDetailRequest = (data: any):movieDetailRequestAction => {
    return {
        type: "MOVIE_DETAIL_REQUEST",
        data
    }
}

export interface movieDetailSuccessAction {
    type: typeof MOVIE_DETAIL_SUCCESS,
    data: any
}

export const movieDetailSuccess = (data: any):movieDetailSuccessAction => {
    return {
        type: "MOVIE_DETAIL_SUCCESS",
        data
    }
}

export interface movieDetailFailureAction {
    type: typeof MOVIE_DETAIL_FAILURE,
    error: any
}

export const movieDetailFailure = (error: any):movieDetailFailureAction => {
    return {
        type: "MOVIE_DETAIL_FAILURE",
        error
    }
}
