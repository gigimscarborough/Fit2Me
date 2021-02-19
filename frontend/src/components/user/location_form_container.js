import { connect } from 'react-redux';

import LocationForm from './location_form';
import {createLocation, updateLocation, fetchUser} from "../../actions/users_actions"



const mSTP = (state, ownProps) => {
    return { currentUser: state.entities.users[ownProps.match.params.userId] }
};

const mDTP = dispatch => ({
    createLocation: location => dispatch(createLocation(location)),
    updateLocation: location => dispatch(updateLocation(location)),
    fetchUser: userId => dispatch(fetchUser(userId))
});



export default connect(
    null,
    mDTP
)(LocationForm);
