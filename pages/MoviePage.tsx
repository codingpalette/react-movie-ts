import * as React from 'react';
import { useLocation, useParams } from "react-router";


const MoviePage = () => {
    const location = useLocation();
    const params = useParams();
    console.log(params)
    return(
        <>
            <div>movie</div>
        </>
    )
}

export default MoviePage;
