import React, { Component } from "react";

class PostForm extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Body</label>
            <textarea type="text" className="form-control" />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
