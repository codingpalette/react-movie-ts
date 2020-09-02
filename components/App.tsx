import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./common/Header";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import { GlobalStyle } from "./common/GlobalStyles";
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { LayoutState } from '../reducers/layout';

const Layout = styled('div')`
    width: 100%;
    display: grid;
    gap: 1rem;
    box-sizing: border-box;
    &.dark{
        background-color: #000;
    }
`;

const App: FC = () => {
    const { darkMode } = useSelector<RootState, LayoutState>((state) => state.layout);
    return(
        <>
            <Layout className={ !darkMode ? 'dark' : '' }>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/movie' component={MoviePage} />
                        <Redirect from='*' to='/'/>
                    </Switch>
                </BrowserRouter>
                <GlobalStyle />
            </Layout>
        </>
    )
}

export default App
