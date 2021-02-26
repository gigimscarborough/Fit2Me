import {
    RECEIVE_WORKOUT_ERRORS,
} from '../actions/workout_actions';

const _nullErrors = [];

const WorkoutErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKOUT_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default WorkoutErrorsReducer;