import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialState = {
  items: [], // represents the posts that come in from our fetch call to jsonplaceholder
  item: {} // represents a post that we add once we get a response
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, items: action.payload };
      break;
    case NEW_POSTS:
      //TODO
      break;
    default:
      return state;
  }
}
