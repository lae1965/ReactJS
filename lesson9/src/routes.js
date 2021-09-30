import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Chats from './chats';
import { Home } from './home';
import { Profile } from './profile';
import { News } from './news';
import { PrivateRoute } from './privateroute';
import { PublicRoute } from './publicjroute';

export const Routes = () => {
    const [authed, setAuthed] = useState(false);
    const handleLogin = () => {
        setAuthed(true);
    }
    const handleLogout = () => {
        setAuthed(false);
    }

    return (
        <BrowserRouter>
            <Link to="/" className="block">Home</Link>
            <Link to="/profile" className="block">Profile</Link>
            <Link to="/chats" className="block">Chats</Link>
            <Link to="/news" className="block">News</Link>
            <Switch>
                <PublicRoute path="/" exact authed={authed}>
                    <Home onLogin={handleLogin} />
                </PublicRoute>
                <PrivateRoute path="/chats/:chatId?" component = {Chats} authed={authed} />
                <PrivateRoute path="/profile" authed={authed}>
                    <Profile onLogout={handleLogout} />
                </PrivateRoute>
                <Route path="/news" component={News} />
                <Route><h4>404</h4></Route>
            </Switch>
        </BrowserRouter>
    )
};

