import {
    RECEIVE_LOCATION_ERRORS,
} from '../actions/users_actions';

const _nullErrors = [];

const LocationErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LOCATION_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default LocationErrorsReducer;