import axios from 'axios';


export const fetchTrainer = (trainerId) => {
    return axios.get(`/api/trainers/show/${trainerId}`)
}

export const searchTrainers = (search) => {
    return axios.get(`/api/trainers/search`, { params: search })
}



