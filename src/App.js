import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/" element={<Home />}>
          <Route path="contact" element={<h2>This is contact</h2>} />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
