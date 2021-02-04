import * as UsersUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_LOCATION ="RECEIVE_LOCATION"

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

// const receiveLocation = (user) => ({
//     type: RECEIVE_LOCATION,
//     user
// })

// SHOULD WE RECEIVE USER

export const fetchUser = user => dispatch => (
    UsersUtil.fetchUser(user).then(user => (
        dispatch(receiveUser(user))
    ))
);

export const createLocation = (location) => dispatch => (
    UsersUtil.createLocation(location).then(user => (
        dispatch(receiveLocation(user))
    ))
)
