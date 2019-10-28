import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/";

export default function configureStore(initialState) {
  createStore(rootReducer, initialState, applyMiddleware());
}
