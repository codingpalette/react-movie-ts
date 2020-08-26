import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./common/Header";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";

const App: FC = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/movie' component={MoviePage} />
                    <Redirect from='*' to='/'/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App