import commentsService from "../../services/comment.service";
import { NEW_COMMENT } from "./type";

export const newComment = data => async dispatch => {
    const comment = await commentsService.newComment(data);
    dispatch({
        type: NEW_COMMENT,
        payload: comment
    })
}