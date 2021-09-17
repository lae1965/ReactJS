import { TOGGLE_SHOW_NAME } from "./action";

const initialState = {
    showName: false,
};

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName
            };
        default:
            return state;    
    }
};