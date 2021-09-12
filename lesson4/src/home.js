import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <Link to="/profile">
                <span style={{display: 'block'}}>Profile</span>
            </Link>
            <h3>This is home page</h3>
        </>
    )
}