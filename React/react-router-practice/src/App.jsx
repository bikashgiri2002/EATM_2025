import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Conatct from "./pages/Conatct";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Conatct />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
