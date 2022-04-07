import { combineReducers } from "redux";
// import { combineReducers } from "reduxjs";

import registeLoginReducer from './reducerAuth';
import messageReducer from './reducerMessage';
import placesReducer from './reducerPlaces' ;
import commentReducer from './reducerComments'

const rootReducers = combineReducers({
    registeLoginReducer,
    messageReducer,
    placesReducer,
    commentReducer
})

export default rootReducers;