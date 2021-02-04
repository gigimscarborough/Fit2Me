import axios from 'axios';

export const fetchUser = (userId) => {
    return axios.get(`/api/users/show/${userId}`);
};

export const createLocation = (location) => {
    return axios.post('/api/locations/create', location)
}