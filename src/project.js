import React, { Component } from 'react';
import './App.css';
import gif from './demo.gif' 
import video from './paper.mp4' 
import img from './proto.jpg' 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';

     


class project extends Component {
    getImageUrl = () => {
      return "http://www.coresponsibility.com/wp-content/uploads/2017/02/migrant-workers-2015-cr-style-1.jpg"
    }
  
    render() {
      return (
        <div className="Able">
          <h2 className="Ablehead" >
            Project: "上海小孩 "
          </h2>
          <div className="Ablebody" >
          <p >
            <br></br>
            <b>Project Summary:</b> For this project, I and a team of two others, created an app focused on brining 
            opportunities to migrant school children. Our app featured a community page and an interactive calendar feature.
            Users of our app could see the different events and workshops available to them, and also post their own events.
            We created this app in attempts to bring equal opportunities to students, regardless of the status of their residency.
            <br></br>
            <br></br>
            {/* <img className= "brandpic" src={this.getImageUrl()} align="right" ></img>  */}
            <b>Research:</b> Our research process for this project mainly consisted on reading several published journals 
            focused mainly on the Chinese Hukou system, and the effects of this system on migrant 
            laborers and consequently on their children. We found that when these families’ migrate 
            from their home locations, their lack of residency permits for the city they migrated to 
            means they can no longer access fundamental services such as education and healthcare. 
            One major source we used was the China Labour Bulletin.
            <br></br>
            <br></br>
            <b> Initial paper prototype:</b>
            <br></br>
            <video loop autoPlay>
            <source src={video} type="video/mp4"/>
            </video>    
                  <img src={img} width="300px"/>
            <br></br>
            <br></br>
            <b>Key Findings:</b> After our initial research process, we went on to focus on the most 
            effective setup and features for our application. Firstly, we found a we-chat mini 
            program would be the most accessible way for our targeted community to access our site.
            We also decided that showcasing events available to this community would be the most
            effective way to help this community, which we showed through our calendar and 
            community board. 
              <br></br>
            <br></br>
           
            <b>Current Prototype:</b> Our current prototype features the interactive calendar 
            aspect of our design.This is where our users can find a holistic overview of the events
            and workshops available to them. Users can click on specific dates on the calendar to 
            access a detailed event page. On this event pages, there is a description of the event, 
            date, location, and attendees shown.
      
            <br></br>
            <img src={gif} width="200px"/>

            <Link to="https://vast-atoll-97599.herokuapp.com/"> Visit our site </Link> 
          <br></br>
          <br></br>
          <b>Future Work:</b> Moving forward we will need to continue implementing the 
          community board and the other features of our app. We would also need to do some 
          fieldwork and user testing with our intended target users to see how easy this app 
          if for them to interact with, and what aspects need to be changed. We will also have to 
          reach out to organizations like Steppingstones and Roots & Shoots to collaborate with us 
          for providing events, and spreading the word to their already developed customer base.

           </p>
           <div className= "homebutton">
          <Link to="/"><button className="button">Home</button></Link>
          </div>
      
          </div>
      
          
        </div>
      );
    }
  }
  
  export default project;
