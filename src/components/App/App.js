import React from "react";
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
      <div className="page">
        <Routes>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          {/* <Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : AuthPage} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
