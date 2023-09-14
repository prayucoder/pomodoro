import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import './App.css';
import SignUp from "./Components/SignUp";
import Header from "./Components/Header";
import Timer from "./Components/Timer";

import { useState } from "react";

// import { Button } from "@chakra-ui/react";

function App() {

  return (
    <Router>
        <Header/>
      <Routes>

        <Route path="/" element={<Timer/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        
      
      </Routes>
    </Router>
      
  );
}

export default App;
