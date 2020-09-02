import * as React from 'react';
import {FC} from 'react';
import {  NavLink  } from 'react-router-dom';
import styled from "@emotion/styled";
import {  useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { LayoutDark } from '../../actions/layout';
import { RootState } from '../../reducers';
import { LayoutState } from '../../reducers/layout';

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



type ComponentProps2 = {
    className?: string
    label: string,
    current? : boolean,
}



const HeaderBox = styled('header')`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 1rem;
   
    
`;

const LinkTag = styled(NavLink)`
    display: block;
    padding: 1rem;
    box-sizing: border-box;
    border-bottom:3px solid transparent;
    &.active{
        border-bottom:3px solid #3498db;
    }
    &.dark{
        color: #fff;
    }
`;

const IconBtn = styled('button')`
    display: block;
    margin-left: auto;
     &.dark{
        color: #fff;
    }
`;

// const Component: FC<ComponentProps2> = ({
//     label,
//     className,
// }) => <div className={className} >{label}</div>
//
// const StyledComponent0 = styled(Component)`
//     color: red;
//     border-bottom:3px solid ${(props) => (props.current ? '#3498db' : 'transparent')};
// `

const Header = () => {
    const { darkMode } = useSelector<RootState, LayoutState>((state) => state.layout);
    const dispatch = useDispatch();

    const location = useLocation();

    console.log(location)

    const onClick = () => {
        dispatch(LayoutDark())
    }

    return(
        <>
            <HeaderBox >
                {/*<StyledComponent0 label="Yea! No need to re-type this label prop."  current={true} />*/}
                <LinkTag className={ !darkMode ? 'dark' : '' } exact to="/">Home</LinkTag>
                <LinkTag className={ !darkMode ? 'dark' : '' } to="/movie">Movie</LinkTag>
                <IconBtn className={ !darkMode ? 'dark' : '' } onClick={onClick}>
                    {!darkMode ? (
                        <FontAwesomeIcon icon={faSun} />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} />
                    )}
                </IconBtn>
            </HeaderBox>
        </>
    )
};

export default Header;
