import {
    RECEIVE_LOCATION_ERRORS,
    RECEIVE_USER
} from '../actions/users_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _nullErrors = [];

const LocationErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LOCATION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_USER:
            return [];
        default:
            return state;
    }
};

export default LocationErrorsReducer;