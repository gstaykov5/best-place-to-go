import { combineReducers } from "@reduxjs/toolkit";

import registeLoginReducer from "./reducerAuth";
import messageReducer from "./reducerMessage";
import placesReducer from "./reducerPlaces";

const rootReducers = combineReducers({
    registeLoginReducer,
    messageReducer,
    placesReducer
})

export default rootReducers;