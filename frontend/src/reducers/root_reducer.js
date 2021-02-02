import { combineReducers } from 'redux';
import sessionReducer from './session_api_reducer';
import errorsReducer from './errors_reducer'
import uiReducer from './ui_reducer'
import TrainersReducer from './trainers_reducer';


const RootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer,
    trainers: TrainersReducer
});

export default RootReducer;