import { combineReducers } from 'redux';
import usersReducer from './users_api_reducer'
import trainersReducer from './trainers_reducer';
import reviewsReducer from './reviews_reducer';
import workoutsReducer from './workouts_reducer';
import searchResultsReducer from './search_results_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    trainers: trainersReducer,
    reviews: reviewsReducer,
    workouts: workoutsReducer,
    searchResults: searchResultsReducer
});


export default entitiesReducer;