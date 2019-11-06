import { combineReducers } from "react-redux";
import postReducer from "../reducers/postReducer";

const rootReducer = combineReducers({
  posts: postReducer
});

export default rootReducer;
