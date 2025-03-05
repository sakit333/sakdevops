import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/sakdevops/" element={<Home />} />
        <Route path="/sakdevops/about" element={<About />} />
        <Route path="/sakdevops/projects" element={<Projects />} />
        <Route path="/sakdevops/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
