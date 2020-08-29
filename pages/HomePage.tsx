import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieRequest } from '../actions/movie'
import { RootState } from '../reducers';
import { MovieState } from '../reducers/movie';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieRequest());
    }, [])

    return(
        <>
            <div>Home</div>
        </>
    )
}

export default HomePage;