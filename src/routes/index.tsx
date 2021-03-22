import React from 'react';
import {connect} from "react-redux";
import {RouteProps, Switch, Route, Redirect} from 'react-router-dom';

import {InterfaceRootReducer} from "../types/store/general";
import {InterfaceInitialState as InterfaceInitialStateAuth} from "../types/store/auth/auth";

import {LoaderForRouters} from "../utils/helpers/loaderForRouters";
import {PageNotFound} from "../utils/helpers/pageNotFound";


const AuthPage = React.lazy(() => import('./auth'));
const Dashboard = React.lazy(() => import('./dashboard'));

const App: React.FunctionComponent<InterfaceReturnState> = ({general: {auth}}) => (
    <React.Suspense fallback={<LoaderForRouters/>}>
        <Switch>
            {
                auth ?
                    <Route exact
                           path={['/attachments', '/gallery', '/masters', '/services', '/reviews', '/contact']}
                           component={Dashboard}/> :
                    <Route exact
                           path={'/'}
                           component={AuthPage}/>
            }
            {
                auth ? <Redirect to={'/attachments'}/> : <PageNotFound/>
            }
        </Switch>
    </React.Suspense>
);

interface InterfaceReturnState extends RouteProps {
    general: InterfaceInitialStateAuth
}

const mapStateToProps = (state: InterfaceRootReducer): InterfaceReturnState => ({
    general: state.auth
})
export default connect(mapStateToProps)(App);