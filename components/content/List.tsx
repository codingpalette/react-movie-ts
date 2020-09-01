import * as React from 'react';
import {FunctionComponent} from 'react';
import styled from "@emotion/styled";
import popcorn from '../../assets/popcorn.jpg';

const ListTag = styled('li')`
    padding: 1rem;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
    &:hover{
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }
    & .img_box img{
        display: block;
        width: 100%;
        height: auto;
    }
`;


interface Props {
    data: any
}

const List:FunctionComponent<Props> = ({data}) => {
    return(
        <>
            <ListTag>
                <div className="img_box">
                    <img src={  `https://image.tmdb.org/t/p/w300${data.poster_path}`} alt=""/>
                    <img src={ popcorn} alt=""/>
                </div>
                {data.title}
            </ListTag>
        </>
    )
};

export default List;
