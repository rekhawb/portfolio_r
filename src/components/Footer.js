import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faStackOverflow} from '@fortawesome/free-brands-svg-icons';


function Footer(){

    return (
        <footer className="h-10 bg-gray-400 ">
            <ul className="list-disc inline-block" >

                <li className="list-disc inline-block mr-5 ml-5 pr-5 pl-5">
                <a href="https://github.com/rekhawb/Community-Connect"><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
                <li className="list-disc inline-block mr-5 ml-5 pr-5 pl-5">
                <a href="https://github.com/rekhawb/Community-Connect"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li className="list-disc inline-block mr-5 ml-5 pr-5 pl-5">
                <a href="https://github.com/rekhawb/Community-Connect"><FontAwesomeIcon icon={faStackOverflow} /></a>
                </li>
            </ul>
          
           
           


        </footer>

    );
};

export default Footer;