import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      //TODO
      break;
    case NEW_POST:
      //TODO
      break;
    default:
      return state;
  }
};

export default postReducer;
