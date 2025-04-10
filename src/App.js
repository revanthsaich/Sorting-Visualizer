// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header.js";
import Footer from "./Component/Footer/Footer.js";
import Home from "./Component/Home/Home.js";
import Sort from "./pages/SortingVisualizer.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<Sort />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
