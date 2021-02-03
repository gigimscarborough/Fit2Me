import { connect } from 'react-redux';
import {fetchUser} from '../../actions/users_actions'
import {getTrainer, searchTrainers} from '../../actions/trainer_actions'

import SearchForm from './search_form';


const mSTP = state => {
    return { currentUserId: state.session.user }
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    searchTrainers: search => dispatch(searchTrainers(search)),
    getTrainer: trainerId => dispatch(getTrainer(trainerId))

});



export default connect(
    mSTP,
    mDTP
)(SearchForm);