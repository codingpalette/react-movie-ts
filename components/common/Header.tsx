import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/movie">Movie</Link>
            </header>
        </>
    )
};

export default Header;