import placeService from '../../services/place.service';
import { NEW_PLACE_FAIL, NEW_PLACE_SUCCESS, GET_ALL_PLACES, SET_MESSAGE } from './type';

export const place = data => async dispatch => {
    try {
        const { place } = await placeService.postPlace(data)

        dispatch({
            type: NEW_PLACE_SUCCESS,
            payload: place
        })
        dispatch({
            type: SET_MESSAGE,
            payload: 'You create new place.'
        })
    } catch (error) {
        console.log('errrrrorrr:', error)
        dispatch({
            type: NEW_PLACE_FAIL,
        });
        dispatch({
            type: SET_MESSAGE,
            payload: 'Fail to create new post',
        });
    }

}

export const getAllPlaces = () => async dispatch => {
    const { places } = await placeService.getAllPlaces();

    dispatch({
        type: GET_ALL_PLACES,
        payload: places
    })
}