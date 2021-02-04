import { connect } from 'react-redux';
import SearchResults from './search_results';


const mSTP = state => {
    return{trainers: state.entities.trainers}
};

const mDTP = dispatch => ({

});



export default connect(
    mSTP,
    mDTP
)(SearchResults);