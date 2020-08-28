import * as React from 'react';
import {FC} from 'react';
import {  NavLink  } from 'react-router-dom';
import styled from "@emotion/styled";
import {  useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { LayoutDark } from '../../actions/layout'
import { RootState } from '../../reducers';
import { LayoutState } from '../../reducers/layout'

import { faCamera } from "@fortawesome/free-solid-svg-icons"
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
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    
`;

const LinkTag = styled(NavLink)`
    display: block;
    padding: 1rem;
    box-sizing: border-box;
    border-bottom:3px solid transparent;
    &.active{
        border-bottom:3px solid #3498db;
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
            <HeaderBox>
                {/*<StyledComponent0 label="Yea! No need to re-type this label prop."  current={true} />*/}
                <LinkTag exact to="/">Home</LinkTag>
                <LinkTag to="/movie">Movie</LinkTag>
                <FontAwesomeIcon icon={faCamera} />

                <div>{ !darkMode && '다크모드 아님' }</div>
                <div>{ darkMode && '다크모드 임' }</div>
                <button onClick={onClick}>클릭</button>
            </HeaderBox>
        </>
    )
};

export default Header;
