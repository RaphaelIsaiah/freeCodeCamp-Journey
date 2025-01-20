// This file creates and exports the Redux store
// src/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export default store;
