import * as React from 'react';
import {FC} from 'react';
import {  NavLink  } from 'react-router-dom';
import styled from "@emotion/styled";
import {  useLocation } from 'react-router';



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
    const location = useLocation();
    console.log(location)

    return(
        <>
            <HeaderBox>
                {/*<StyledComponent0 label="Yea! No need to re-type this label prop."  current={true} />*/}
                <LinkTag exact to="/">Home</LinkTag>
                <LinkTag to="/movie">Movie</LinkTag>
            </HeaderBox>
        </>
    )
};

export default Header;
