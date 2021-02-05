import { connect } from 'react-redux';

import LocationForm from './location_form';
import {createLocation} from "../../actions/users_actions"



const mSTP = (state, ownProps) => {
    return { currentUser: state.entities.users[ownProps.match.params.userId] }
};

const mDTP = dispatch => ({
    createLocation: location => dispatch(createLocation(location))
});



export default connect(
    null,
    mDTP
)(LocationForm);
