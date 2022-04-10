import { SET_LOCATION, CLEAR_LOCATION } from "../actions/type"

const initialPlaces = {position: null};


const mapLocationReducer = (state = initialPlaces, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_LOCATION:
            return {...state, position: payload}
        case CLEAR_LOCATION:
            return {position: null}
        default:
            return state;
    }
}

export default mapLocationReducer;