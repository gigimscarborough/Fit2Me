import { connect } from 'react-redux';


import SearchResults from './search_form';


const mSTP = state => {
    return{trainers: Object.values(state.entities.trainers)}
};

const mDTP = dispatch => ({

});



export default connect(
    mSTP,
    mDTP
)(SearchResults);