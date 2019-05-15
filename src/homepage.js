import React, { Component } from 'react';
import './App.css';
import project from './project.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';


class homepage extends Component {
  render() {
    return (
      <div className="App">
    <h3>Personal Statement</h3>
   <p className= "perstate">
   For me, my decision to puruse my studies in both the business and computer 
   science tracks was one that happened by chance. I am currently a rising Junior 
   and NYU Shanghai, studying the major of Interactive Media and Business. However, 
   this was not always my major, and definitely was not my clear imagined path. I started 
   out as simply a Business and Marketing major, when I decided I would take Communications 
   Lab, a class that focus on a holistic overview of both coding and fundamentals of website 
   curation, as a fun class on the side. However, this class that was intended to be a silly 
   side class quickly became something much more. After completing this course, I knew my path 
   must change, and that my true interests spanned a field much wider than the courses of my 
   Business and Marking major. Now as an IMB major, I have the freedom to explore two coexisting 
   fields, and see the ways in which business, creative ideas, and coding can come together to 
   make my wildest daydreams a reality in front of my eyes. Every day I am realizing this happy 
   mistake has changed the trajectory of my life, and continues to open my eyes to all of the possibilities in front of me.

   </p>
<Link to="/project"><button className="button"> Previous Projects</button></Link>
      </div>
    );
  }
}

export default homepage;