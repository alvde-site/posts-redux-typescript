import React from "react";
import stylesApp from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import { AuthPage } from "../AuthPage/AuthPage";

import { Navbar } from "../Navbar/Navbar";
import { PostsList } from "../PostsList/PostsList";
import { SinglePostPage } from "../SinglePostPage/SinglePostPage";
import { EditPostForm } from "../EditPostForm/EditPostForm";
import { HaveToLoggedIn } from "../HaveToLoggedIn/HaveToLoggedIn";
import { useAppSelector } from "../../utils/hooks";
import { selectAllAuth } from "../../services/reducers/authSlice";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";

function App() {
  const auth = useAppSelector(selectAllAuth);
  const fieldRef = React.useRef<HTMLInputElement>(null);

  const handleToPostScroll =()=> {
    if(fieldRef) {
      fieldRef.current!.scrollIntoView();
    }
    
  }
  return (
    <Router>
      <div className={stylesApp.page}>
        <header>
          <Navbar userId={auth.userId} />
        </header>
        <main>
          <Routes>
            <Route
              path="/login"
              element={auth.loggedIn ? <Navigate to="/" /> : <AuthPage />}
            />
            <Route
              path="/"
              element={
                <React.Fragment>
                  {!auth.loggedIn ? (
                    <HaveToLoggedIn />
                  ) : (
                    <AddPostForm userId={auth.userId} handleScroll={handleToPostScroll}/>
                  )}
                  <PostsList fieldRef={fieldRef}/>
                </React.Fragment>
              }
            />
            <Route path="/posts/:postId" element={<SinglePostPage />} />
            <Route path="/editPost/:postId" element={<EditPostForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
