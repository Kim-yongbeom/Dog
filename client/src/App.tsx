// npm i @emotion/styled @emotion/react
// npm i react-router-dom
// npm install react-icons --save
// npm i axios

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </>
  );
}

export default App;
