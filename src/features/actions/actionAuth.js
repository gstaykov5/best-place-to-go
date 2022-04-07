import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    UPDATE_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    REMOVE_ALL_PLACES
} from "./type";

import authService from '../../services/auth.service';

export const registration = (data) => async dispatch => {
    const user = await authService.register(data);

    if (!user.username) {
        dispatch({
            type: REGISTER_FAIL,
        })
    }
    
    dispatch({
        type: REGISTER_SUCCESS
    });
    dispatch({
        type: LOGIN_SUCCESS,
        payload: { user }
    });
    dispatch({
        type: SET_MESSAGE,
        payload: 'You successfuly create new account.'
    });
    
    sessionStorage.setItem('user', JSON.stringify(user));

    // return user;
}

export const login = (email, password) => async dispatch => {
    const user = await authService.login(email, password);
console.log(user)
console.log({user})
    if(!user.username){
        dispatch({
            type: SET_MESSAGE,
            payload: 'Email or password is incorrect'
        })
        dispatch({
            type: LOGIN_FAIL,
        })
        return;
    }
        
    dispatch({
        type: LOGIN_SUCCESS,
        payload: { user }
    })
    dispatch({
        type: SET_MESSAGE,
        payload: 'You are successfully logged in'
    })
    
    sessionStorage.setItem('user', JSON.stringify(user));
}

export const update = (data, id) => async dispatch => {
    const user = await authService.update(data, id);

    if(user.username) {
        dispatch({
            type: UPDATE_USER,
            payload: { user }
        })
        sessionStorage.setItem('user', JSON.stringify(user));
    }
}

export const logout = () => dispatch => {
    authService.logout();
    dispatch({
        type: LOGOUT,
    });
    dispatch({
        type: REMOVE_ALL_PLACES,
    });
};