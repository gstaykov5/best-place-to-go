import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    UPDATE_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from "./type";

import authService from '../../services/auth.service';

export const registration = (data) => async dispatch => {
    return authService.register(data)
        .then(() => {
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch({
                type: SET_MESSAGE,
                payload: 'You create new account. New you can login'
            })
            // return Promise.resolve;
        })
        .catch((error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            // return Promise.reject();
        })
}

export const login = (email, password) => async dispatch => {
    const data = await authService.login();
    const loggedUser = await data.filter(user => user.email === email && user.password === password);

    if (loggedUser.length === 0) {
        dispatch({
            type: SET_MESSAGE,
            payload: 'Email or password is incorrect'
        })
        dispatch({
            type: LOGIN_FAIL,
        })

        return;
    }

    localStorage.setItem('user', JSON.stringify(loggedUser[0]));
    dispatch({
        type: LOGIN_SUCCESS,
        payload: {
            user: loggedUser[0]
        }
    })
    dispatch({
        type: SET_MESSAGE,
        payload: 'You are successfully logged in'
    })

    return loggedUser;
}

export const update = (data, id) => async dispatch => {
    const user = await authService.update(data, id);
    dispatch({
        type: UPDATE_USER,
        payload: {
            user
        }
    })
    localStorage.setItem('user', JSON.stringify(user));
}

export const logout = () => dispatch => {
    authService.logout();
    dispatch({
        type: LOGOUT,
    });
};