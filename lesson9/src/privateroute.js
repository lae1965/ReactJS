import React from 'react';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({ authed, ...props }) => authed ? <Route {...props} /> : <Redirect to="/" />;