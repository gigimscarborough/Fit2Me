import { connect } from 'react-redux';
import {fetchUser} from '../../actions/users_actions'
import {getTrainer, searchTrainers} from '../../actions/trainer_actions'
import {sendForm} from '../../actions/search_actions'
import SearchForm from './search_form';


const mSTP = state => {
    return { 
        currentUser: state.entities.users[state.session.user.id],
        search: state.ui.search
    }
};

const mDTP = dispatch => ({
    sendForm: (form) => dispatch(sendForm(form)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    searchTrainers: search => dispatch(searchTrainers(search)),
    getTrainer: trainerId => dispatch(getTrainer(trainerId))

});



export default connect(
    mSTP,
    mDTP
)(SearchForm);