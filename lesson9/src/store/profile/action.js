import { ref, set, onValue } from "@firebase/database";
import { db } from "../../services/firebase";

export const NAME = 'PROFILE::NAME';

const setName = (name) => ({
    type: NAME,
    payload: name,
});

export const getNameFromDb = () => (dispatch) => {
    onValue(ref(db, "profile"), (snapshot) => {
        dispatch(setName(Object.values(snapshot.val() || '')));
    });
};

export const setNameToDb = (name) => () => {
    set(ref(db, "profile"), {
        name: name,
    });
};

