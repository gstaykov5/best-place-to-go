import produce from "immer";
import { NEW_COMMENT, ALL_COMMENTS, DELETE_COMMENT } from "../actions/type";

const initialState = {};

const commentReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEW_COMMENT:
            return produce(state, draft => {draft.comments.push(payload.comment)})
        case ALL_COMMENTS:
            return {...state, comments: payload }
        case DELETE_COMMENT:
            return produce(state, draft => {
                draft.comments.filter(comment => {
                    console.log(comment)
                    console.log(comment._id)
                    console.log(payload.comment._id)
                    return comment._id !== payload.comment._id
                })
            })
        default:
            return state;
    }
}

export default commentReducer;