import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import LocationErrorsReducer from './location_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    location: LocationErrorsReducer
});