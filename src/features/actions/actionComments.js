import commentsService from "../../services/comment.service";
import { ALL_COMMENTS, NEW_COMMENT, DELETE_COMMENT, SET_MESSAGE } from "./type";

export const newComment = data => async dispatch => {
    const comment = await commentsService.newComment(data);

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

export const allComments = (placeId) => async dispatch => {
    const comments = await commentsService.getAllComments();

    const placeComments = comments.comment.filter(place => place.placeId === placeId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    if(comments.comment.length === 0) {
        dispatch({
            type: SET_MESSAGE,
            payload: 'Fail to post to new comment'
        })
    } 
    dispatch({
        type: ALL_COMMENTS,
        payload: placeComments
    })
}

export const deleteComment = (commentId) => async dispatch =>{
    const comments = await commentsService.deleteComment(commentId);

    dispatch({
        type: DELETE_COMMENT,
        payload: comments
    })
}
