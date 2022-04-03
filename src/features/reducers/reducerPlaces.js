import { NEW_PLACE_SUCCESS, NEW_PLACE_FAIL, GET_ALL_PLACES } from '../actions/type';

const initialPlaces = {placesAreHere: false, places: null};

const placesReducer = (state = initialPlaces, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEW_PLACE_SUCCESS:
            return {...state, placesAreHere: true, places: payload};
        case GET_ALL_PLACES:
            return { placesAreHere: true, places: payload };
        case NEW_PLACE_FAIL:
            return [...state]
        default:
            return state
    }
}

export default placesReducer;