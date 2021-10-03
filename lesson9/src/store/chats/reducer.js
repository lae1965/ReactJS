import { GET_CHATLIST } from "./action";

const initialState = {
    chatList: [],
};

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHATLIST:
            return {
                ...state,
                chatList: payload,
            };
        default:
            return state;
    }
};