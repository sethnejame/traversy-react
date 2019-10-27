import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

const App = () => (
  <Provider store={store}>
    <div className="container-fluid">
      <PostForm />
      <hr />
      <Posts />
    </div>
  </Provider>
);

export default App;
