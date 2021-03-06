import { REGISTER_SUCCESS, REGISTER_FAIL, UPDATE_USER, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type";

const user = JSON.parse(sessionStorage.getItem('user'));

const initialState = user ? {isLoggedIn: true, user} : {isLoggedIn: false, user: null};

const registeLoginReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return { ...state, isLoggedIn: false };
        case REGISTER_FAIL:
            return { ...state, isLoggedIn: false };
        case UPDATE_USER:
            return {...state, isLoggedIn: true, user: payload.user}
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: payload.user };
        case LOGIN_FAIL:
            return { ...state, isLoggedIn: false, user: null }
        case LOGOUT:
            return { ...state, isLoggedIn: false, user: null }
        default:
            return state;
    }
}

export default registeLoginReducer;