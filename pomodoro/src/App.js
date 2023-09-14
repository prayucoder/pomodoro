import React from 'react';


import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PomodoroTimer from "./Components/PomodoroTimer";

import SignUp from "./Components/Comp/Signup";
import Header from "./Components/Header";
import Login from "./Components/Comp/Login";





function App() {
 

  return (
    
    <Router>
        <Header/>
        <Routes>
          <Route path="/pomodoroTimer" element={<PomodoroTimer/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Login/>}/>      
        </Routes>
    </Router>
      
    
  );
}

export default App;
