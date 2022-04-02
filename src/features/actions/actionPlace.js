import placeService from '../../services/place.service';
import { NEW_PLACE_FAIL, NEW_PLACE_SUCCESS, SET_MESSAGE } from './type';

export const place = data => dispatch => {
    return placeService.postPlace(data)
        .then(() => {
            dispatch({
                type: NEW_PLACE_SUCCESS,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: 'You create new place.'
            })
        })
        .catch((err) => {
            dispatch({
                type: NEW_PLACE_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: 'You dont create new post',
            });
        })

}