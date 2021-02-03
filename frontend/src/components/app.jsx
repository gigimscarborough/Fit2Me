import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav/navbar_container'
import Modal from './session/modal'
import Splash from './splash/splash'
import TrainerShowContainer from './trainer/trainer_show_container'
import UserShowContainer from './user/user_show_container'
import ReviewFormContainer from './review/review_form_container'


const App = () => (
    <div>
        {/* <h1>Hello World</h1> */}
    <Modal/>
    <NavBar/>
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/trainers/:trainerId" component={TrainerShowContainer} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <Route exact path='/trainers/:trainerId/reviews/create' component={ReviewFormContainer}/>
        {/* <Route exact path="/search" component={SearchContainer} /> */}
    </Switch>
    </div>
);

export default App;