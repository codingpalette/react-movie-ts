import { combineReducers } from 'redux';

import layoutReducer from './layout';
import movieReducer from './movie'

const reducer = combineReducers({
    layout: layoutReducer,
    movie: movieReducer,
});
export type RootState = ReturnType<typeof reducer>;

export default reducer;
