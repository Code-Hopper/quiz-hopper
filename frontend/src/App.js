import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importing main style sheet to style all components
import "./style.css"

// import bootstrap for designing

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// importing pages for router

import Home from "./components/Home";
import Contact from "./components/Contact";
import InstituteLR from "./components/InstituteLR";
import StudentLR from "./components/StudentLR";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>

      {/* creating react router */}

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/institutelr" element={<InstituteLR/>}/>
          <Route path="/studentlr" element={<StudentLR/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
