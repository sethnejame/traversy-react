import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => dispatch({ type: FETCH_POSTS, payload: posts }));
};

export const createPost = post => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(response => response.json())
    .then(post => dispatch({ type: NEW_POST, payload: post }));
};
