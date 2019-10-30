import React, { Component } from "react";
import { fetchPosts } from "../redux/actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
