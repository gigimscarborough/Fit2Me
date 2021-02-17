import { connect } from 'react-redux';
import SearchResults from './search_results';
import {getTrainer, searchTrainers} from '../../actions/trainer_actions'



const mSTP = state => {
    const trainers = Array.isArray(state.entities.trainers) ? state.entities.trainers : Object.values(state.entities.trainers)
    return {
        trainers,
        search: state.ui.search
    }
};

const mDTP = dispatch => ({
    searchTrainers: search => dispatch(searchTrainers(search)),
});



export default connect(
    mSTP,
    mDTP
)(SearchResults);