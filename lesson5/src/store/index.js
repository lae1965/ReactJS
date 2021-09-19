import { createStore } from "redux";
import { profileReduser } from "./profile/reducer";

export const store = createStore(profileReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());