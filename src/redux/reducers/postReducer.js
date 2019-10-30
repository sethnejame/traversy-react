import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], // the reducer needs an init state - this is for the array of posts
  item: {} // this is for the post object (contains title, body)
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
