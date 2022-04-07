import commentsService from "../../services/comment.service";
import { NEW_COMMENT, SET_MESSAGE } from "./type";

export const newComment = data => async dispatch => {
    const { comment } = await commentsService.newComment(data);
console.log(comment)
    if(comment.length === 0) {
        dispatch({
            type: SET_MESSAGE,
            payload: 'Fail to post to new comment'
        })
    } 
    dispatch({
        type: NEW_COMMENT,
        payload: comment
    })
}

export const allComments = () => async dispatch => {
    const comments = await commentsService.getAllComments();

    if(comments.comment.length === 0) {
        dispatch({
            type: SET_MESSAGE,
            payload: 'Fail to post to new comment'
        })
    } 
    dispatch({
        type: NEW_COMMENT,
        payload: comments
    })
}

export const pushComment = (data, id) => async dispatch => {
    const comment = await commentsService.pushNewComment(data, id);
    console.log(comment)
}