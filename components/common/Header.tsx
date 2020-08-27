import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from "@emotion/styled";
import {  useLocation } from 'react-router';


type ComponentProps = {
    current: boolean,
}



const HeaderBox = styled('header')`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    
`;

const LinkTag = styled(Link)`
    display: block;
    padding: 1rem;
    box-sizing: border-box;
    border-bottom:3px solid ${(props:ComponentProps) => (props.current ? '#3498db' : 'transparent')};
`;


const Header = () => {
    const location = useLocation();
    console.log(location)

    return(
        <>
            <HeaderBox>
                <LinkTag to="/" current={location.pathname === '/'}>Home</LinkTag>
                <LinkTag to="/movie" current={location.pathname === '/movie'}>Movie</LinkTag>
            </HeaderBox>
        </>
    )
};

export default Header;