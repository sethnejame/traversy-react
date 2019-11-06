import { createStore, applyMiddleware } from "react-redux";
import rootReducer from "../reducers";

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware());

export default store;
