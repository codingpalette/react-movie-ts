import * as React from 'react';
import {FunctionComponent} from 'react';
import {  Link  } from 'react-router-dom';
import styled from "@emotion/styled";
import popcorn from '../../assets/popcorn.jpg';

import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { LayoutState } from '../../reducers/layout';

const ListTag = styled('li')`
    padding: 1rem;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
    //&:hover{
    //    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    //}
     &.dark{
        & a {
            color: #fff;
        }
        //&:hover{
        //    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
        //}
    }
    & .img_box{
       padding-bottom: 150%;
       position: relative;
    }
    & .img_box img{
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


interface Props {
    data: any
}

const List:FunctionComponent<Props> = ({data}) => {
    const { darkMode } = useSelector<RootState, LayoutState>((state) => state.layout);
    return(
        <>
            <ListTag className={ darkMode ? 'dark' : '' }>
                <Link to={`movie/${data.id}`}>
                    <div className="img_box">
                        <img src={ data.poster_path? `https://image.tmdb.org/t/p/w300${data.poster_path}` : popcorn} alt=""/>
                    </div>
                    {data.title}
                </Link>
            </ListTag>
        </>
    )
};

export default List;
