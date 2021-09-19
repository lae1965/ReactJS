import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReduser } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReduser,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
