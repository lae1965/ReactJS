import React, { useState } from 'react';

export const Home = ({onLogin}) => {
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
        onLogin();
    };

    return (
        <>
            <h3>This is home page</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={login} onChange={handleLoginSet} />    
                <input type="password" value={password} onChange={handleSetPassword} />    
                <input type="submit" />    
            </form>
        </>
    );
};