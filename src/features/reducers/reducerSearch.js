import { SEARCH_PLACE } from '../actions/type';

const searchReducer = (state = {}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SEARCH_PLACE:
            return {search: payload}
        default:
            return state;
    }
}

export default searchReducer;