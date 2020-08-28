import { combineReducers } from 'redux';

import layoutReducer from './layout';

const reducer = combineReducers({
    layout: layoutReducer,
});
export type RootState = ReturnType<typeof reducer>;

export default reducer;
