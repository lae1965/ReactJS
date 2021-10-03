import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from "@firebase/auth";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCl0l-6w1S_0OxQyR7ua1D8o2T7C22Ae_E",
    authDomain: "messager-c3b71.firebaseapp.com",
    databaseURL: "https://messager-c3b71-default-rtdb.firebaseio.com",
    projectId: "messager-c3b71",
    storageBucket: "messager-c3b71.appspot.com",
    messagingSenderId: "89238074784",
    appId: "1:89238074784:web:9192e7d49114722278a0c5",
    measurementId: "G-T362R9F1XZ"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
}

export const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
}

export const signOut = async () => {
    await firebaseSignOut(auth);
}
