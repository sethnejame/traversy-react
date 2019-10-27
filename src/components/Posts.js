import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";

class Posts extends Component {
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

export default connect(null, { fetchPosts })(Posts);
