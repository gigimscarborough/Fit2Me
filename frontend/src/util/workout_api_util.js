import axios from 'axios'

export const createWorkout = (workout) => {
    console.log('create workout api')
    console.log(workout)
    return axios.post(`/api/workouts/create`, workout)
}


// export const fetchWorkouts = () => {
//     return axios.get(`/api/workouts/${trainerId}/reviews`)
// }


export const fetchWorkout = (workoutId) => {
    return axios.get(`/api/workouts/show/${workoutId}`)
}

export const updateWorkout = (workout) => {
    return axios.patch(`/api/workouts/update/${workout.id}`)
}


export const deleteWorkout = (workoutId) => {
    return axios.delete(`/api/workouts/delete/${workoutId}`)
}