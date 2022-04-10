import { combineReducers } from "redux";
// import { combineReducers } from "reduxjs";

import registeLoginReducer from './reducerAuth';
import messageReducer from './reducerMessage';
import placesReducer from './reducerPlaces' ;
import commentReducer from './reducerComments';
import mapLocationReducer from './reducerMapLocation';
import searchReducer from './reducerSearch'

const rootReducers = combineReducers({
    registeLoginReducer,
    messageReducer,
    placesReducer,
    commentReducer,
    mapLocationReducer,
    searchReducer
})

export default rootReducers;