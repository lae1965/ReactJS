import React from "react";
import { Redirect, Route } from "react-router";

export const PublicRoute = ({ authed, ...props }) => !authed ? <Route {...props} /> : <Redirect to="/chats/" />;