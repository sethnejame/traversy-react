import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions/postActions";
import PropTypes from 'prop-types';

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <textarea
              type="text"
              className="form-control"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
