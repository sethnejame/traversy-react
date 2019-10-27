import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

const store = configureStore();

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
