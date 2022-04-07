import { NEW_COMMENT, All_COMMENTS } from "../actions/type";

const initialState = {comments: []};

const commentReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEW_COMMENT:
            return {...state, comments: payload};
        case All_COMMENTS:
            return { comments: payload }
        default:
            return state;
    }
}

export default commentReducer;