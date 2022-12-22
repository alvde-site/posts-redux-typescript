import React from "react";
import stylesApp from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { AddPostForm } from "../AddPostForm/AddPostForm";

import { Navbar } from "../Navbar/Navbar";
import { PostsList } from "../PostsLIst/PostsList";
import { SinglePostPage } from "../SinglePostPage/SinglePostPage";
import { EditPostForm } from "../EditPostForm/EditPostForm";


function App() {
  return (
    <Router>
      <Navbar />
      <div className={stylesApp.page}>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          {/* <Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : AuthPage} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
