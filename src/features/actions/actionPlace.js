import placeService from '../../services/place.service';
import { NEW_PLACE_FAIL, NEW_PLACE_SUCCESS, GET_ALL_PLACES, SET_MESSAGE } from './type';

export const postNewPlace = data => async dispatch => {
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

export const updatePlace = (id, data) => async dispatch => {
    try {
        const { place } = await placeService.updatePlace(id, data);

        dispatch({
            type: NEW_PLACE_SUCCESS,
            payload: place
        })
        dispatch({
            type: SET_MESSAGE,
            payload: 'You edit new place.'
        })
    } catch (error) {
        console.log('errrrrorrr:', error)
        dispatch({
            type: NEW_PLACE_FAIL,
        });
        dispatch({
            type: SET_MESSAGE,
            payload: 'Fail to edit new post',
        });
    }   
}

export const deletePlace = id => async dispatch => {
    try {
        const { places } = await placeService.deletePlace(id);

        dispatch({
            type: GET_ALL_PLACES,
            payload: places
        })
    } catch (error) {
        console.log('errrrrorrr:', error)
        dispatch({
            type: NEW_PLACE_FAIL,
        });
        dispatch({
            type: SET_MESSAGE,
            payload: 'Fail to delete new post',
        });
    }   
}