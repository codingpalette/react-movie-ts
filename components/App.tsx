import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./common/Header";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import SearchPage from "../pages/SearchPage";
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
            <Layout className={ darkMode ? 'dark' : '' }>
                <HashRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/search' component={SearchPage} />
                        <Route path='/movie/:id' component={MoviePage} />
                        <Redirect from='*' to='/'/>
                    </Switch>
                </HashRouter>
                <GlobalStyle />
            </Layout>
        </>
    )
}

export default App
