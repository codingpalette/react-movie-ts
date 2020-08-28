import produce from 'immer';

import { LAYOUT_DARK, LayoutDarkAction } from '../actions/layout';

export interface LayoutState {
    darkMode: boolean,
}


const initialState: LayoutState = {
    darkMode: false,

};
type LayoutReducerActions = LayoutDarkAction ;
const layoutReducer = (prevState = initialState, action: LayoutReducerActions) => {
    return produce(prevState, (draft) => {
        switch (action.type) {
            case LAYOUT_DARK:
                draft.darkMode = !draft.darkMode;
                break;
            default:
                break;
        }
    })
}

export default layoutReducer;
