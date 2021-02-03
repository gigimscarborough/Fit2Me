import axios from 'axios';


export const fetchTrainer = (trainerId) => {
    return axios.get(`/api/trainers/show/${trainerId}`)
}



