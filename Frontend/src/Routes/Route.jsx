import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "Components/Pages/Login/Login";
import Register from "Components/Pages/Register/Register";

// ROUTING COMPONENTS
import ProtectedRoute from "./ProtectedRoute";
import RoutesList from "./RoutesList";
import { URL_LOGIN,URL_REGISTER } from "Helpers/Paths";

function Routes() {
    return (
        <Switch>
            <Route path={URL_LOGIN} component={Login} />
            <Route path={URL_REGISTER} component={Register} />
            <ProtectedRoute>
                {
                    RoutesList.map((route, index) => (
                        <React.Fragment key={index}>
                            {
                                <Route
                                    path        = {route.path}
                                    exact       = {route.exact}
                                    component   = {route.component}
                                />
                            }
                        </React.Fragment>
                    ))
                }
            </ProtectedRoute>
        </Switch>
    );
}

export default Routes;
