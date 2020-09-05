import * as React from 'react';
import { useLocation, useParams } from "react-router";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {movieDetailRequest, movieRequest} from "../actions/movie";


const MoviePage = () => {
    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieDetailRequest({
            id
        }));
    }, [])


    return(
        <>
            <div>movie</div>
        </>
    )
}

export default MoviePage;
