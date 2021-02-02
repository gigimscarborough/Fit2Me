import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav/navbar_container'
import Modal from './session/modal'
import Splash from './splash/splash'
import UserShowContainer from './user/user_show_container'


const App = () => (
    <div>
        {/* <h1>Hello World</h1> */}
    <Modal/>
    <NavBar/>
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
    </Switch>
    </div>
);

export default App;