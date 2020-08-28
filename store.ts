
import { createStore, MiddlewareAPI, Dispatch, AnyAction, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';


const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    console.log('로깅', action);
    next(action);
}

const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(firstMiddleware))
    : composeWithDevTools(
        applyMiddleware(firstMiddleware)
    );

const store = createStore(reducer, enhancer);

export default store;
