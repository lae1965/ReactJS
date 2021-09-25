import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Chats from './chats';
import { Home } from './home';
import { Profile } from './profile';
import { News } from './news';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Link to="/" className="block">Home</Link>
            <Link to="/profile" className="block">Profile</Link>
            <Link to="/chats" className="block">Chats</Link>
            <Link to="/news" className="block">News</Link>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chats/:chatId?" component = {Chats} />
                <Route path="/profile" component = {Profile} />
                <Route path="/news" component={News} />
                <Route><h4>404</h4></Route>
            </Switch>
        </BrowserRouter>
    )
};

