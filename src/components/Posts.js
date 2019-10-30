import React, { Component } from "react";
import { fetchPosts } from "../actions/types";

class Posts extends Component {

  componentWillMount() {
    fetchPosts();
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <hr />
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
