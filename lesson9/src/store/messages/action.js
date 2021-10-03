import { ref, set, onValue } from "@firebase/database";

import { db } from "../../services/firebase";
import { AUTORS } from "../../Util/constants";

export const GET_MESSAGELIST = 'MESSAGE::GET_MESSAGELIST';

const getMessageList = (messageList) => ({
    type: GET_MESSAGELIST,
    payload: messageList,
});

const addMessageToDb = (text, autor, chatId) => () => {
    set(ref(db, `chats/${chatId}/messages/message-${Date.now()}`), {
        text: text,
        autor: autor, 
    });
};

export const addMessageToDbWithAnswer = (text, chatId) => (dispatch) => {
    dispatch(addMessageToDb(text, AUTORS.HUMAN, chatId));
    setTimeout(() => {
        dispatch(addMessageToDb('Message received', AUTORS.BOT, chatId));
    }, 1500);
};

export const getMessageListFromDb = (chatId) => (dispatch) => {
    const unsubscribe = onValue(ref(db, `chats/${chatId}/messages`), (snapshot) => {
        dispatch(getMessageList(Object.values(snapshot.val() || {})));
    });
    return unsubscribe;
};