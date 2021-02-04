import axios from 'axios';

export const fetchUser = (userId) => {
    console.log('in fetch users api')
    return axios.get(`/api/users/show/${userId}`);
};

export const createLocation = (location) => {
    console.log("IN CREATE LOCATION")
    console.log(location)
    return axios.post('/api/locations/create', location)
}