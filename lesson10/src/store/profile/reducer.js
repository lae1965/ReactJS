import { NAME } from "./action";

const initialState = {
    name: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;    
    }
};