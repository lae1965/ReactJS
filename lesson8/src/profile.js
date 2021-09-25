import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowName } from './store/profile/action';
import { selectShowName } from './store/profile/selectors';

export const Profile = () => {
    const showName = useSelector(selectShowName);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleShowName);
    }
    return (
        <div>
            <h3>This is profile page</h3>
            <input type="checkbox" checked={showName} onChange={handleClick}></input>
            {showName && <span>showName is true</span>}
        </div>
    )    
}