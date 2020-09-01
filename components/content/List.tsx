import * as React from 'react';
import {FunctionComponent, ReactNode} from 'react';
import styled from "@emotion/styled";

const ListTag = styled('li')`
  padding: 1rem;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
  &:hover{
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;


interface Props {
    data: any
}

const List:FunctionComponent<Props> = ({data}) => {
    console.log(data)
    return(
        <>
            <ListTag>
                {data.title}
            </ListTag>
        </>
    )
};

export default List;
