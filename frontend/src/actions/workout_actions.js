import * as WorkoutApiUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";


const receiveWorkout = workout => (
    {
        type: RECEIVE_WORKOUT,
        workout
    }
)

const receiveWorkouts = workouts => (
    {
        type: RECEIVE_WORKOUTS,
        workouts
    }
)

const removeWorkout = workoutId => (
    {
        type: REMOVE_WORKOUT,
        workoutId
    }
)

export const receiveWorkoutErrors = errors => ({
    type: RECEIVE_WORKOUT_ERRORS,
    errors
});



export const fetchWorkout = (workoutId) => dispatch => (
    WorkoutApiUtil.fetchWorkout(workoutId)
        .then(workout => dispatch(receiveWorkout(workout)))
)

export const createWorkout = (workout) => dispatch => (
    WorkoutApiUtil.createWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)))
        .catch((err) => {dispatch(receiveWorkoutErrors(err.response.data))})

)

export const updateWorkout = (workout) => dispatch => (
    WorkoutApiUtil.updateWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)))
        .catch((err) => {dispatch(receiveWorkoutErrors(err.response.data))})

)

export const deleteWorkout = (workoutId) => dispatch => (
    WorkoutApiUtil.deleteWorkout(workoutId)
        .then(() => dispatch(removeWorkout(workoutId)))
)


