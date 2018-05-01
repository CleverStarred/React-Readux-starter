import objectAssign from 'object-assign';

import {
    HANDLE_UPLOAD_PANEL_LINK
} from '../actions/main';

const initialState = {
    showUploadPanel: false,
    products: [],
    balance: 0,
    basketProducts: []
};

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_UPLOAD_PANEL_LINK:
            return objectAssign({}, state, {showUploadPanel: !state.showUploadPanel});
        default:
            return state;
    }
}

export default mainReducer;
