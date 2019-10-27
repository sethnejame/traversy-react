import React, { Component } from "react";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value } )
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" name="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <div className="form-group">
            <label>Body</label>
            <textarea type="text" className="form-control" name="body" onChange={this.onChange} value={this.state.body}/>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
