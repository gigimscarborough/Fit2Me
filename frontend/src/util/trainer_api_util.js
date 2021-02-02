import axios from 'axios';


export const getTrainer = (trainerId) => {
    return axios.get(`/api/trainers/${trainerId}`)
}

export const searchTrainers = (search) => {
    return axios.get()
}

