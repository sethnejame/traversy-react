import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";

const App = () => (
  <Provider>
    <div className="container-fluid">
      <PostForm />
      <hr />
      <Posts />
    </div>
  </Provider>
);

export default App;
