import axios from 'axios';

export const fetchUser = (userId) => {
    console.log('in fetch users api')
    return axios.get(`/api/users/show/${userId}`);
};

