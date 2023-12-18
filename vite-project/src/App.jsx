import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./components/Contact"
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="ro">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;