import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => (
  <Provider store={store}>
    <div className="container">
      <PostForm />
      <hr />
      <Posts />
    </div>
  </Provider>
);

export default App;
