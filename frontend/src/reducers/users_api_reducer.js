import {RECEIVE_USER} from '../actions/users_actions'

export default function (state = {}, action) {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState
        default:
            return state;
    }
}
