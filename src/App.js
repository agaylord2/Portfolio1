import React, { Component } from 'react';
import './App.css';
import project from './project.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import homepage from './homepage.js';

function App() {
  return (
    <div className="App">
    <h1>Allie Gaylord
    </h1>
  

   <Router>
      <div className="App">
      <Route exact path="/" component={homepage} />
        <Route path="/project" component={project} />
      </div>
    
    </Router>
    </div>
  );
}

export default App;
