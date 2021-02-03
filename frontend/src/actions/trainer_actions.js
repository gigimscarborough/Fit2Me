import * as TrainerApiUtil from '../util/trainer_api_util';

export const RECEIVE_TRAINER = "RECEIVE_TRAINER";

const receiveTrainer = trainer => ({
    type: RECEIVE_TRAINER,
    trainer
})

export const getTrainer = trainerId => dispatch => (
    TrainerApiUtil.fetchTrainer(trainerId)
        .then(trainer => dispatch(receiveTrainer(trainer)))
        .catch(err => console.log(err))
)