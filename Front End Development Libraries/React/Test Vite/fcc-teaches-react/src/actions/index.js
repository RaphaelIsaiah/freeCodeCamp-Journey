// src/actions/index.js
// Contains the action types and action creators
export const ADD = "ADD";

export const addMessage = (message) => ({
  type: ADD,
  message,
});
