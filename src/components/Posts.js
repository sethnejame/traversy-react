import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    );
  }
}

export default Posts;
