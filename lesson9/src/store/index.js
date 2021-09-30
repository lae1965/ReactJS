import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage"

import { chatsReducer } from "./chats/reducer";
import { messagesReduser } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import { articlesReducer } from "./articles/reducer";


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReduser,
    articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
