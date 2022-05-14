import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/" element={<Home/>}>
          <Route path="contact" element={<h2>This is contact</h2>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
