import { NEW_COMMENT } from "../actions/type";

const initialState = []

const commentReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case NEW_COMMENT:
            return [...state, payload];
        default:
            return state;
    }
}

export default commentReducer;