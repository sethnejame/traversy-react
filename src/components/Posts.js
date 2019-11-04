import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
      </div>
    );
  }
}

export default Posts;
