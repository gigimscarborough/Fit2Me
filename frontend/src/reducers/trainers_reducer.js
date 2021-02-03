import { RECEIVE_TRAINER, RECEIVE_TRAINERS } from '../actions/trainer_actions';


const TrainersReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TRAINER:
            return Object.assign({}, state, { [action.trainer.data['_id']]: action.trainer.data })
        case RECEIVE_TRAINERS:
            return action.trainers.data.trainers
            
        default:
            return state;
    }
}

export default TrainersReducer