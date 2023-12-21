// Home.js

import React from 'react';
import './styles/Home.css'; // Import Home.css
import headshotImage from './images/profile.png'; // Import your headshot image

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <div className="intro">
        <div className="intro-item">
          <img src={headshotImage} alt="Headshot" className="headshot" />
        </div>
        <div className="intro-item">
          <p>
            Hi, I'm Abdouaziz Jom, a junior studying Computer and Information Science at the University of Michigan. I've always been passionate about technology and the power it holds to innovate. I particularly enjoy working with software engineering, game development, and frontend development. I continually strive to learn and explore new technical fields. I find joy in collaborating with others and am enthusiastic about working with a team to create meaningful and impactful projects.
          </p>
          <p>
            Feel free to reach out to me:
          </p>
          <ul>
            <li><strong>Phone:</strong> 313-808-3739</li>
            <li><strong>Email:</strong> abdou.jom16@gmail.com</li>
            <li><strong>Github:</strong> <a href="https://github.com/azjom" className="contact-link">github.com/azjom</a></li>
            <li><strong>Location:</strong> Detroit, MI</li>
          </ul>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <ul>
            <li>Languages: C++, C#, C, Python, Julia, R, Matlab, JavaScript</li>
            <li>Frameworks: Git/Github, VSCode, SolidWorks, Google Sheets, Microsoft Excel, HTML, CSS, React, Flask, AWS, SQLite3, Rest API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
