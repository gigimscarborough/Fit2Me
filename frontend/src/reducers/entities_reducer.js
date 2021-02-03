import { combineReducers } from 'redux';
import usersReducer from './users_api_reducer'
import trainersReducer from './trainers_reducer';
import reviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    trainers: trainersReducer,
    reviews: reviewsReducer
});


export default entitiesReducer;