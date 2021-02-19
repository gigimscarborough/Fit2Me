import * as TrainerApiUtil from '../util/trainer_api_util';

export const CLEAR_TRAINERS = "CLEAR_TRAINERS";
export const RECEIVE_TRAINER = "RECEIVE_TRAINER";
export const RECEIVE_TRAINERS = "RECEIVE_TRAINERS";

const receiveTrainer = trainer => ({
    type: RECEIVE_TRAINER,
    trainer
})
const clearAllTrainers = () => ({
    type: CLEAR_TRAINERS
})

const receiveTrainers = trainers => ({
    type: RECEIVE_TRAINERS,
    trainers
})

export const getTrainer = trainerId => dispatch => (
    TrainerApiUtil.fetchTrainer(trainerId)
        .then(trainer => dispatch(receiveTrainer(trainer)))
        .catch(err => console.log(err))
)

export const searchTrainers = search => dispatch => (
    TrainerApiUtil.searchTrainers(search)
        .then(trainers => dispatch(receiveTrainers(trainers)))
)
export const clearTrainers = () => dispatch => (
    dispatch(clearAllTrainers())
)