import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import './App.css';
import { selectName } from './store/profile/selectors';
import { getNameFromDb, setNameToDb } from './store/profile/action';

export const Profile = ({onLogout}) => {
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(getNameFromDb());
    }, [dispatch]);

    const handleSubmit = useCallback((ev) => {
        ev.preventDefault();
        dispatch(setNameToDb(value));
        setValue("");
    }, [dispatch, value]);

    const handleChange = (ev) => {
        setValue(ev.target.value);
    }

    return (
        <div>
            <h3>This is profile page</h3>
            {/*<input type="checkbox" checked={showName} onChange={handleClick}></input>*/}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={value} placeholder="Input your name"/>       
                <Button type="submit" variant="contained" color="primary">Enter</Button> 
            </form>
            <div>{ name }</div>
            <div><Button onClick={onLogout} variant="contained" color="primary">Quite</Button></div>
        </div>
    )    
}