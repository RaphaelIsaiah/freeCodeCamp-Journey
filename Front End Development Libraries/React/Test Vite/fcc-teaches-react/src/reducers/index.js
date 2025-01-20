// Combines all the reducers (if you have more than one) into a root reducer
// src/reducers/index.js
import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
});

export default rootReducer;
