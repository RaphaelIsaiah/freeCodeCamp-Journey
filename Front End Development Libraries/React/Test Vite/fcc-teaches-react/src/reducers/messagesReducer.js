// Reducer function that handles the state for messages.
// src/reducers/messagesReducer.js
import { ADD } from "../actions";

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

export default messagesReducer;
