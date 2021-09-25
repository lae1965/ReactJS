import { ADD_CHAT, DELETE_CHAT } from "./action";

const initialState = {
    chatList: [],
};

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [...state.chatList, {
                    topic: payload.name, 
                    id: payload.id,
                }],
            };
        case DELETE_CHAT:
            const newChatList = [...state.chatList];
            const findIndex = newChatList.findIndex(el => el.id === payload);
            newChatList.splice(findIndex, 1);
            return {
                ...state,
                chatList: newChatList,
            };
        default:
            return state;
    }
};