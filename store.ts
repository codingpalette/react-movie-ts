
import { createStore, MiddlewareAPI, Dispatch, AnyAction, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    console.log('로깅', action);
    next(action);
}

const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(firstMiddleware, sagaMiddleware))
    : composeWithDevTools(
        applyMiddleware(firstMiddleware, sagaMiddleware)
    );

const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
