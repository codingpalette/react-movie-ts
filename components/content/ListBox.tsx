import * as React from 'react';
import {FunctionComponent} from 'react';
import styled from '@emotion/styled'

const UlTag = styled('ul')`
    padding: 0 1rem;
    box-sizing: border-box;
    display: grid;
    @media screen and (min-width:768px) {
        grid-template-columns: repeat(5, 1fr);
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
