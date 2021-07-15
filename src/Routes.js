import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import Home from "./components/pages/HomeComponent";
import LoginComponet from './components/pages/LoginComponent';

import Register from './components/pages/RegisterComponent'
import PrivateRoute from './PrivateRoute';
import { Guard } from './Guards';
//import Header from './components/layouts/Header';
function Routes() {
    return (
        <>
            {/* <Header /> */}
            <Switch>
                <Route exact path="/" render={props => (
                    <Redirect to={{ pathname: '/home' }} />
                )} />
                {/* <Route path="/home" component={Home} /> */}
                <Route path="/login" component={LoginComponet} />
                <Route path="/register" component={Register} />
                {/*Redirect if not authenticated */}
                <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute} />
            </Switch>
        </>
    );
}
export default Routes;