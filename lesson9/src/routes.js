import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import Chats from './chats';
import { Home } from './home';
import { Profile } from './profile';
import { News } from './news';
import { PrivateRoute } from './privateroute';
import { PublicRoute } from './publicjroute';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, login, signOut, signUp } from './services/firebase';
import { setAuthed } from './store/routes/action';

export const Routes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            dispatch(setAuthed(!!user));
        });
        return unsubscribe;
    }, [dispatch]); 

    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
        } catch(e) {
            console.log(e);
        }
    }

    const handleSignUp = async (email, password) => {
        try {
            await signUp(email, password);
        } catch(e) {
            console.log(e);
        }
    }

    const handleLogout = async () => {
        try {
            await signOut();
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <BrowserRouter>
            <Link to="/" className="block">Home</Link>
            <Link to="/profile" className="block">Profile</Link>
            <Link to="/chats" className="block">Chats</Link>
            <Link to="/news" className="block">News</Link>
            <Switch>
                <PublicRoute path="/login">
                    <Home onLogin={handleLogin} />
                </PublicRoute>
                <PublicRoute path="/signup">
                    <Home onSignUp={handleSignUp} />
                </PublicRoute>
                <PrivateRoute path="/chats/:chatId?" component = {Chats} />
                <PrivateRoute path="/profile">
                    <Profile onLogout={handleLogout} />
                </PrivateRoute>
                <Route path="/news" component={News} />
                <Route><h4>404</h4></Route>
            </Switch>
        </BrowserRouter>
    )
};

