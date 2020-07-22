import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//uses the same API as route
//renders the Route and passes the props through
//checks if user is authenticated; if so, render "component"
//if not, redirect to /login

//we rename component to Component so that the program reads it as a Component and renders it in JSX.
// ...rest is the props (the rest of the stuff we need to pass in)
//we are changing component (below) and then adding back in the rest of stuff with ...rest

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props => {
            if(localStorage.getItem("token")) {
                return <Component {...props} />
            } else {
                return <Redirect to="/login"/>
            }
        }}
        />
    );
};

export default PrivateRoute;