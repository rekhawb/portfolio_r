import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';



function Projects(props) {
  if (props.display === "Projects") {
    return (
      <div className="grid grid-cols-3 gap-4 flex items-center">
        <div className="mb-4">
          <img
            src="/images/project1.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-300">div</div>
        </div>

        <div className="mb-4">
          <img
            src="/images/project2.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-300">div</div>
        </div>
        <div className="mb-4">
          <img
            src="/images/project3.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-300">div</div>
        </div>
        <div className="mb-4">
          <img
            src="/images/project5.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-300">div</div>
        </div>
        <div className="mb-4">
          <img
            src="/images/project6.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-300">div</div>
        </div>

        <div className="mb-4">
          <img
            src="/images/project8.jpg"
            alt=""
            className="max-w-full h-auto rounded-full"
          />
          <div class="bg-teal-100 " absolute>
            <ul>
                <li>
                <a href="https://gentle-peak-70353.herokuapp.com/">
              Community Connect
            </a>
                </li>
                <li>
                <a href="https://github.com/rekhawb/Community-Connect"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
            </ul>
            
          
        
            
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;
