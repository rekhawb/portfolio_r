import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';



function Projects(props) {
  if (props.display === "Projects") {
    return (
      <div className="grid grid-cols-3 gap-4 flex items-center pb-10">
        
        <div className="mb-4 mt-2 overflow-hidden  h-49 w-96">
          <img
            src="./images/project1.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-100 " absolute>
            <ul>
            <li className="inline-block mr-5 ml-5 pr-5 pl-5 underline text-blue-900">
                <a href="https://rekhawb.github.io/Weather-Forecast/">
              Weather Dashboard
            </a>
                </li>
                <li className="inline-block mr-5 ml-5 pr-5 pl-5 float-right">
                <a href="https://github.com/rekhawb/Weather-Forecast"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
            </ul>
            
          </div>
    
          </div>
          

          <div className="mb-4 mt-2 h-55 w-96">
          <img
            src="./images/project2.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-100 " absolute>
            <ul>
            <li className="inline-block mr-5 ml-5 pr-5 pl-5 underline text-blue-900">
                <a href="https://rekhawb.github.io/Food-Recall/">
              Food Recall
            </a>
                </li>
                <li className="inline-block mr-5 ml-5 pr-5 pl-5 float-right">
                <a href="https://github.com/rekhawb/Food-Recall"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
            </ul>
            
          
        
            
          </div>
          </div>
          <div className="mb-4 mt-2 overflow-hidden  h-55 w-96">
          <img
            src="./images/project3.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
        <div class="bg-teal-100 " absolute>
            <ul>
            <li className="inline-block mr-5 ml-5 pr-5 pl-5 underline text-blue-900">
                <a href="https://rekhawb.github.io/CodeQuiz/">
              CodeQuiz
            </a>
                </li>
                <li className="inline-block mr-5 ml-5 pr-5 pl-5 float-right">
                <a href="https://github.com/rekhawb/CodeQuiz"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
            </ul>
            
          
        
            
          </div>
          </div>
          <div className="mb-4 mt-2 overflow-hidden  h-55 w-96">
          <img
            src="./images/project5.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-100 " absolute>
            <ul>
            <li className="inline-block mr-5 ml-5 pr-5 pl-5 underline text-blue-900">
                <a href="https://rekhawb.github.io/Bingo/">
              Bingo
            </a>
                </li>
                <li className="inline-block mr-5 ml-5 pr-5 pl-5 float-right">
                <a href="https://github.com/rekhawb/Bingo"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
            </ul>
            
          
        
            
          </div>
          </div>
          <div className="mb-4 mt-2 overflow-hidden  h-50 w-96">
          <img
            src="./images/project6.jpg"
            className="max-w-full h-auto rounded-full"
            alt=""
          />
          <div class="bg-teal-100 " absolute>
            <ul>
            <li className="inline-block mr-5 ml-5 pr-5 pl-5 underline text-blue-900">
                <a href="https://whispering-plains-47939.herokuapp.com/">
              Tech Blog
            </a>
                </li>
                <li className="inline-block mr-5 ml-5 pr-5 pl-5 float-right">
                <a href="https://github.com/rekhawb/TechBlog"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
            </ul>
            
          
        
            
          </div>
          </div>

          <div className="mb-4 mt-2 overflow-hidden  h-50 w-96">
          <img
            src="./images/project8.jpg"
            alt=""
            className="max-w-full h-auto rounded-full"
          />
          <div class="bg-teal-100 " absolute>
            <ul>
            <li className="inline-block mr-5 ml-5 pr-5 pl-5 underline text-blue-900">
                <a href="https://gentle-peak-70353.herokuapp.com/">
              Community Connect
            </a>
                </li>
                <li className="inline-block mr-5 ml-5 pr-5 pl-5 float-right">
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
