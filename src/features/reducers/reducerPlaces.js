import produce from 'immer';
import { NEW_PLACE_SUCCESS, NEW_PLACE_FAIL, GET_ALL_PLACES, REMOVE_ALL_PLACES } from '../actions/type';

const initialPlaces = {placesAreHere: false, places: null};

const placesReducer = (state = initialPlaces, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEW_PLACE_SUCCESS:
            return produce(state, draft => {draft.places.push(payload) });
        case GET_ALL_PLACES:
            return { placesAreHere: true, places: payload };
        case NEW_PLACE_FAIL:
            return { ...state }
        case REMOVE_ALL_PLACES:
            return { ...state, placesAreHere: false, places: null };
        default:
            return state
    }
}

export default placesReducer;