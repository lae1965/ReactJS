import { GET_MESSAGELIST } from "./action";

export const initialState = {
    messageList: {},
};

export const messagesReduser = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_MESSAGELIST:
            return {
                ...state,
                messageList: payload,
            };    
        default:
            return state;    
    }
}