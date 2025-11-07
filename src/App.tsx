import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Portfolio from "./pages/Portofolio";
import Certificates from "./pages/Certificates";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="experience" element={<Experience />} />
          <Route path="certificates" element={<Certificates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
