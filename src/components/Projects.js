// Projects.js

import React from 'react';
import './styles/Projects.css'; // Import Projects-specific CSS

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>Machine Learning</h3>
        <p>
          Developed a machine learning classifier that can automatically identify the subject of posts from class forum with an accuracy of 85%. Applied machine learning, natural language processing, and recursion concepts in C++
        </p>
      </div>

      <div className="project">
        <h3>Steve</h3>
        <p>
          Developed a helper robot named Steve that uses vocal recognition and computer vision to press elevator buttons. Steve is a fully autonomous robot that can understand and respond to voice commands, and can also identify and locate elevator buttons.
        </p>
      </div>

      <div className="project">
        <h3>Search Engine</h3>
        <p>
          Combined skills in information retrieval, data processing, server architecture, API implementation, and user interface design for a comprehensive search engine solution. Engineered an Index server using Service-Oriented Architecture (SOA) and a REST API to deliver search results in JSON format. Developed a scalable search engine using text and link analysis, employing MapReduce for parallel data processing.
        </p>
      </div>

      <div className="project">
        <h3>Insta485</h3>
        <p>
          Created a client-side version of Instagram. Implemented client-side dynamic pages and a REST API, while reusing and refactoring server-side code. Focused JavaScript programming, asynchronous programming (AJAX), and REST API concepts. Enabled dynamic user interface features like liking and commenting without page reloads, infinite scrolling, and double-click to like.
        </p>
      </div>

      <div className="project">
        <h3>Assembler/Linker</h3>
        <p>
          Implemented an assembler, simulator, and an assembly-language multiplication routine. Implemented a linker to combine multiple object files to a single executable. Pipelined Datapath Simulator/Data and Memory Cache Simulator to simulate the execution of machine learning programs that are pipelined and/or use data cache.
        </p>
      </div>
    
    </div>
  );
};

export default Projects;
