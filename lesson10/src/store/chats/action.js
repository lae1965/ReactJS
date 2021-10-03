import { ref, set, onValue, remove } from "@firebase/database";
import { db } from "../../services/firebase";

export const GET_CHATLIST = 'CHATS::GET_CHATLIST'

const getChatList = (chatList) => ({
    type: GET_CHATLIST,
    payload: chatList,
});

export const addChatToDb = (chatList) => () => {
    let newId;
    do {
        newId = `chat-${parseInt(Math.random()*1000)}`;
        // eslint-disable-next-line
    } while (chatList.length !== 0 && !!chatList.find(el => el.id === newId));

    const chatTitle = prompt("A topic name of the new chat");
    if (!!chatTitle) {
        set(ref(db, `chats/${newId}`), {
            id: newId,
            topic: chatTitle,
        });
    }
};

export const deleteChatFromDb = (id) => () => {
    remove(ref(db, `chats/${id}`));
};

export const getChatListFromDb = () => (dispatch) => {
    onValue(ref(db, 'chats'), (snapshot) => {
        dispatch(getChatList(Object.values(snapshot.val() || {})));
    });
};