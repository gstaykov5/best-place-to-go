import placeService from '../../services/place.service';
import { NEW_PLACE_FAIL, NEW_PLACE_SUCCESS, GET_ALL_PLACES, SET_MESSAGE } from './type';

export const place = data => async dispatch => {
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

export const getPlaces = () => async dispatch => {
    const places = await placeService.getAllPlaces();
        dispatch({
            type: GET_ALL_PLACES,
            payload: places
        })
}