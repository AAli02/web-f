import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Landing } from './components';


import './App.css';

const App = () => (
  
  <div>
    <Router>
      <Routes>
      </Routes>
    </Router>
    <Nav />
    <Landing />
  </div>
);

export default App;
