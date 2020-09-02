import * as React from 'react';
import {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const UlTag = styled('ul')`
    padding: 0 1rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1rem;
    @media screen and (min-width:768px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;


const ListBox:FunctionComponent = ({children}) => {
    return(
        <>
            <UlTag>
                {children}
            </UlTag>
        </>
    )
}

export default ListBox;
