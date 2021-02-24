import { connect } from 'react-redux';
import {fetchUser} from '../../actions/users_actions'
import {getTrainer, searchTrainers, clearTrainers} from '../../actions/trainer_actions'
import {sendForm} from '../../actions/search_actions'
import SearchForm from './search_form';


const mSTP = state => {
    return { 
        currentUser: state.session.user ? state.entities.users[state.session.user.id] : null,
        search: state.ui.search
    }
};

const mDTP = dispatch => ({
    sendForm: (form) => dispatch(sendForm(form)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    searchTrainers: search => dispatch(searchTrainers(search)),
    getTrainer: trainerId => dispatch(getTrainer(trainerId)),
    clearTrainers: () => dispatch(clearTrainers()),
});



export default connect(
    mSTP,
    mDTP
)(SearchForm);