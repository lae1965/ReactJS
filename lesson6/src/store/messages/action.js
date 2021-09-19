export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';
export const DELETE_CHAT_MESSAGES = 'MESSAGE::DELETE_CHAT_MESSAGES';

export const addMessage = (text, autor, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        text,
        autor,
        chatId,
    },
});
export const deleteChatMessages = (chatId) => ({
    type: DELETE_CHAT_MESSAGES,
    payload: chatId,
});

