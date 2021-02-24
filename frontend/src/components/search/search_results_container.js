import { connect } from 'react-redux';
import SearchResults from './search_results';
import {searchTrainers, fetchAllTrainers} from '../../actions/trainer_actions'



const mSTP = state => {
    // const trainers = Array.isArray(state.entities.trainers) ? state.entities.trainers : Object.values(state.entities.trainers)
    const trainers = Object.values(state.entities.trainers)
    return {
        trainers,
        searchResults: state.entities.searchResults,
        search: state.ui.search
    }
};

const mDTP = dispatch => ({
    fetchAllTrainers: ()=>dispatch(fetchAllTrainers()),
    searchTrainers: search => dispatch(searchTrainers(search)),
});



export default connect(
    mSTP,
    mDTP
)(SearchResults);