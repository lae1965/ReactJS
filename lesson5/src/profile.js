import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleShowName } from './store/profile/action';

export const Profile = () => {
    const showName = useSelector(state => state.showName);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleShowName);
    }
    return (
        <>
            <Link to="/">
                <span style={{display: 'block'}}>Home</span>
            </Link>
            <h3>This is profile page</h3>
            <input type="checkbox" checked={showName} onChange={handleClick}></input>
            {showName && <span>showName is true</span>}
        </>
    )    
}