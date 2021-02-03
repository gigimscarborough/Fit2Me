import * as UsersUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});


export const fetchUser = user => dispatch => (
    UsersUtil.fetchUser(user).then(user => (
        dispatch(receiveUser(user))
    ))
);



