import { combineReducers } from 'redux';
import trainersReducer from './trainers_reducer';

const entitiesReducer = combineReducers({
    trainers: trainersReducer
})

export default entitiesReducer;