import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav/navbar_container'
import Modal from './session/modal'
import Splash from './splash/splash'
import TrainerShowContainer from './trainer/trainer_show_container'
import UserShowContainer from './user/user_show_container'
import SearchFormContainer from './search/search_form_container'
import SearchResultsContainer from './search/search_results_container'


const App = () => (
    <div>
        {/* <h1>Hello World</h1> */}
    <Modal/>
    <NavBar/>
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/trainers/:trainerId" component={TrainerShowContainer} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <Route exact path="/search" component={SearchFormContainer} />
        <Route exact path="/search/results" component={SearchResultsContainer} />
    </Switch>
    </div>
);

export default App;