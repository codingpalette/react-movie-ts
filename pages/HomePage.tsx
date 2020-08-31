import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieRequest } from '../actions/movie'
import { RootState } from '../reducers';
import { MovieState } from '../reducers/movie';
import ListBox from '../components/content/ListBox'
import List from "../components/content/List";

const HomePage = () => {
    const { list } = useSelector<RootState, MovieState>((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieRequest());
    }, [])

    return(
        <>
            <div>
                {list && list.results.length >= 1 && (
                    <>
                        {list.results.map((list: any, i: string | number | null | undefined) => (
                            <List key={i} />
                        ))}
                    </>
                )}

            </div>
        </>
    )
}

export default HomePage;
