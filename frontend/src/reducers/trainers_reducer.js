import { RECEIVE_TRAINER } from '../actions/trainer_actions';


const TrainersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TRAINER:
            return Object.assign({}, state, {[action.trainer.id]: action.trainer})
        default:
            return state;
    }
}

export default TrainersReducer