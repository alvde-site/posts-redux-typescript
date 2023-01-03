import React from "react";
import stylesApp from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import { AuthPage } from "../AuthPage/AuthPage";

import { Navbar } from "../Navbar/Navbar";
import { PostsList } from "../PostsList/PostsList";
import { SinglePostPage } from "../SinglePostPage/SinglePostPage";
import { EditPostForm } from "../EditPostForm/EditPostForm";
import { HaveToLoggedIn } from "../HaveToLoggedIn/HaveToLoggedIn";
import { useAppSelector } from "../../utils/hooks";
import { selectAllAuth } from "../../services/reducers/authSlice";

function App() {
  // const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAllAuth);
  return (
    <Router>
      <div className={stylesApp.page}>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  {!auth ? <HaveToLoggedIn /> : <AddPostForm />}
                  <PostsList />
                </React.Fragment>
              }
            />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/posts/:postId" element={<SinglePostPage />} />
            <Route path="/editPost/:postId" element={<EditPostForm />} />
          </Routes>
        </main>
        <footer className={stylesApp.footer}></footer>
      </div>
    </Router>
  );
}

export default App;
