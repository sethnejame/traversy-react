import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <div className="container-fluid">
    <Provider store={store}>
      <PostForm />
      <hr />
      <Posts />
    </Provider>
  </div>
);

export default App;
