import { RECEIVE_TRAINER } from '../actions/trainer_actions';


const TrainersReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TRAINER:
            return Object.assign({}, state, {[action.trainer.data['_id']]: action.trainer.data})
        default:
            return state;
    }
}

export default TrainersReducer