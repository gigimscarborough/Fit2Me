import { combineReducers } from 'redux';
import usersReducer from './users_api_reducer'
import trainersReducer from './trainers_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    trainers: trainersReducer
});


export default entitiesReducer;