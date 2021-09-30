import { AUTORS } from "../../Util/constants";

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
export const addMessageWithThunk = (text, autor, chatId) => (dispatch) => {
    dispatch(addMessage(text, autor, chatId));
    if (autor === AUTORS.HUMAN) {
        setTimeout(() => {
            dispatch(addMessage('Message received', AUTORS.BOT, chatId));
        }, 1000);
    }
}

