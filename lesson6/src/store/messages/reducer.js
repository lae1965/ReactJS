import { ADD_MESSAGE, DELETE_CHAT_MESSAGES } from "./action";

export const initialState = {
    messageList: {},
};

export const messagesReduser = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [payload.chatId]:
                        (!!payload.autor) ? 
                        ([...(state.messageList[payload.chatId] || []), 
                            {
                                text: payload.text,
                                autor: payload.autor,
                            },
                        ]) : [],
                }
            }
        case DELETE_CHAT_MESSAGES:
            const newState = {...state};
            delete newState.messageList[payload];
            return newState;    
        default:
            return state;    
    }
}