import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer"
import Sidebar from "./sidebar"
import Navbar from "./Navbar/Navbar"
import Signup from "./Signup/Signup"
function App() {
  return (
    <>
     <Router>
      <Navbar />
      <h1> juned </h1>
      <p> mohammad juned</p>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Router>
     
       
    </>
  )
}

export default App
