import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

import { selectAuthed } from './store/routes/selectors';

export const PrivateRoute = ({ ...props }) => {
    const authed = useSelector(selectAuthed);
    
    return (authed ? <Route {...props} /> : <Redirect to="/login" />);
}