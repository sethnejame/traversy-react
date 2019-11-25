import React, { Component } from "react";
import fetchPosts from "../redux/actions/postActions";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetchPosts();
  }

  render() {
    const postList = this.state.posts.map(post => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <hr />
      </div>
    ));
    return (
      <div className="container">
        <h1>Posts</h1>
        {postList}
      </div>
    );
  }
}

export default Posts;
