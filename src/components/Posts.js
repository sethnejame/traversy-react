import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import PropTypes from "prop-types";
class Posts extends Component {
  componentWillMount() {
    console.log("component loaded, calling fetchPosts");
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
  // the reason why we use 'posts' as our state here is because
  // that's what we use in our rootReducer file to link the reducer
  // to the state
  posts: state.posts.items
  // this now gives us 'this.props.posts'
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
