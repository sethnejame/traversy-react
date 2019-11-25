import React, { Component } from "react";
import fetchPosts from "../redux/actions/postActions";
import { connect } from "react-redux";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postList = this.props.posts.map(post => (
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

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
