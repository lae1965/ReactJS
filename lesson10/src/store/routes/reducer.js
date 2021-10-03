import { SET_AUTHED, } from "./action";

const initialState = {
    authed: false,
};

export const routesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTHED:
            return {
                ...state,
                authed: payload
            };
        default:
            return state;    
    }
}