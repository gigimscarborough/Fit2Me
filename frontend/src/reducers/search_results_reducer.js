import { RECEIVE_SEARCH, CLEAR_SEARCH} from '../actions/trainer_actions';


const SearchResultsReducer = (state = [], action) => {
    
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SEARCH:
            return action.trainers.data.trainers
        case CLEAR_SEARCH:
            return []
        default:
            return state;
    }
}

export default SearchResultsReducer