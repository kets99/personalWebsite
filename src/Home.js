import React from 'react';
import './Home.css'; // Import your CSS file
import Navbar from './Navbar';
import timelineElements from "./timelineElements";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import Photo from "./kets.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin, faGithub, faYoutube, faSkype} from '@fortawesome/free-brands-svg-icons'


fontawesome.library.add(faEnvelope, faLinkedin, faGithub, faYoutube, faSkype);

const Home = () => {
	
	let workIconStyles = { background: "#000" };
	let schoolIconStyles = { background: "#000" };

  return (

    <div>
	

   {/* Centered Header */}
      <div className="centered-header">
        <h1>ketki  davda</h1>
		
		<div className="icons">
		<div className="icon-inner-container">
		<a href="mailto:davdaketki@gmail.com" target="_blank"> <FontAwesomeIcon className="icon" icon="fa-solid fa-envelope" /> </a> {'                                     '}
		<a href="https://github.com/kets99" target="_blank"> <FontAwesomeIcon className="icon" icon="fa-brands fa-github" /> </a>{'                                     '}
		<a href="https://www.linkedin.com/in/ketkidavda/" target="_blank"> <FontAwesomeIcon className="icon" icon="fa-brands fa-linkedin" /> </a>
		</div>
		</div>
      </div>
	  
	  <Navbar/>

      {/* Main content */}
      <div className="landing-container">
        <div className="content-left">
          <div className="summary">
		  <h2>hi! Welcome to my corner on the internet</h2>
            <p>I'm a cybersecurity professional with experience at Morgan Stanley and Wolters Kluwer, adept in incident resolution, team mentorship, and project management. I have also been a part of award-winning projects like Smart City and Decibel, showcasing expertise in real-time monitoring and innovative solutions.</p>
		  </div>      
        </div>

        <div className="photo-frame">
			<img src={Photo} alt="my Photograph"/>
        </div>
		</div>
		
		<div className="education">

	         <h1 className="second-header">education and work experience</h1>
		
      <VerticalTimeline>

        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{ background: '#222222' ,color: '#fff' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '3px solid #ffcc00' }}
    icon={<WorkIcon />}

              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
			  			<hr/>

              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >

                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

        </div>
	<h1 className="second-header">selected projects</h1>


		        {/* Project section */}
        <div className="project-section">
          <div className="project-box">
            {/* Your project details */}
            <h3>Algorithm Simulator</h3>
			<hr/>
            <p>A collection of simulations for algorithms to better understand how algorithms used in computer Science work. One can use their own entries to simulate the algorithms on screen.</p>
			<hr/>
			<a className="button" href="https://github.com/kets99/algocollegeproject" target="_blank"> View Project </a>
		  </div>
          <div className="project-box">
            {/* Your project details */}
            <h3>Indoor Navigator</h3>
			<hr/>
            <p>An AR based app that lets you navigate spaces indoors. You can save the directions for an indoors location and use our app to visit it later. We have used Unity as our developing platform with the Placenote SDK that using ARKit plugin.</p>
			<hr/>
			<a className="button" href="https://github.com/kets99/IndoorNavigator" target="_blank"> View Project </a>
</div>
          <div className="project-box">
            {/* Your project details */}
            <h3>Toll Taking</h3>
			<hr/>
            <p>An application that can be used to pay tolls at toll booths automatically without having to stop and pay manually. The app checks if there is a toll booth coming up and provides you the option to pay it so that you can zoom through the toll booth.</p>			
			<hr/>
			<a className="button" href="https://github.com/kets99/Toll-Taking" target="_blank"> View Project </a>
          </div>
        </div>

	    <h1 className="second-header">contact me</h1>

	<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
	<li class="button">
  <button type="submit">Send your message</button>
</li>

  </ul>
</form>

	    <h1 className="second-header">fin</h1>


    </div>
  );
}

export default Home;
