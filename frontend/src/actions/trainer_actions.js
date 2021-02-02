import { getTrainer } from '../util/trainer_api_util';

export const RECEIVE_TRAINER = "RECEIVE_TRAINER";

const receiveTrainer = trainer => ({
    type: RECEIVE_TRAINER,
    trainer
})

export const getTrainer = trainerId => dispatch => (
    getTrainer(trainerId)
        .then(trainer => dispatch(receiveTrainer(trainer)))
        .catch(err => console.log(err))
)