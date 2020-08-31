import * as React from 'react';
import {FC, ReactNode} from 'react'


interface Props {
    childer?: any
}

const ListBox:FC<Props> = ({childer}) => {
    return(
        <>
            {childer}
        </>
    )
}

export default ListBox;
