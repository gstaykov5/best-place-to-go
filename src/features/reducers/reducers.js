import { combineReducers } from "@reduxjs/toolkit";

import registeLoginReducer from "./reducerAuth";
import messageReducer from "./reducerMessage";

const rootReducers = combineReducers({
    registeLoginReducer,
    messageReducer
})

export default rootReducers;