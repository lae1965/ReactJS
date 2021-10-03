import React, { useState } from 'react';

export const Home = ({ onLogin, onSignUp }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSet = (ev) => {
        setLogin(ev.target.value);
    };

    const handleSetPassword = (ev) => {
        setPassword(ev.target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setLogin('');
        setPassword('');
        if(!!onLogin) {
            onLogin(login, password);
        } else {
            onSignUp(login, password);
        }
    };

    return (
        <>
            <h3>{!!onLogin ? 'Login' : 'SignUp'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={login} onChange={handleLoginSet} />    
                <input type="password" value={password} onChange={handleSetPassword} />    
                <input type="submit" />    
            </form>
        </>
    );
};