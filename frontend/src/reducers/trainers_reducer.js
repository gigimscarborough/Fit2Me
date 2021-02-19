import { CLEAR_TRAINERS, RECEIVE_TRAINER, RECEIVE_TRAINERS } from '../actions/trainer_actions';


const TrainersReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TRAINER:
            return Object.assign({}, state, { [action.trainer.data['_id']]: action.trainer.data })
        case RECEIVE_TRAINERS:
            return action.trainers.data.trainers
        case CLEAR_TRAINERS:
            return []
            
        default:
            return state;
    }
}

export default TrainersReducer