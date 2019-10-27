import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

const App = () => (
  <div className="container-fluid">
    <PostForm />
    <hr />
    <Posts />
  </div>
);

export default App;
