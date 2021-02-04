import {
    RECEIVE_WORKOUT,
    RECEIVE_WORKOUTS,
    REMOVE_WORKOUT
} from '../actions/workout_actions'

const workoutsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKOUTS:
            return action.workouts.data
        case RECEIVE_WORKOUT:
            return Object.assign({}, state, { [action.workout.data['_id']]: action.workout.data })
        default:
            return state;
    }
}

export default workoutsReducer