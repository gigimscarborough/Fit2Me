import axios from 'axios'

export const createWorkout = (workout) => {
    return axios.get(`/api/workouts/create`, workout)
}