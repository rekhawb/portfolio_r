import React, { useState} from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function Nav() {

    const [isShown, setFormState] = useState("About");
    const handleClick = (event) => {
        const { id } = event.target;
    
        if (id === "About") {
          //  alert(id);
    
          setFormState("About");
          
         
        } else if (id === "Contact") {
           // alert(id);
          setFormState("Contact");
          
         
        }else if (id === "Projects") {
            // alert(id);
           setFormState("Projects");
           
          
         }else if (id === "Skills") {
            // alert(id);
           setFormState("Skills");
           
          
         }else {

        }
      };

  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        

        <span className="font-semibold text-xl tracking-tight">
          Rekha Renduchintala
        </span>
      </div>
     
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="About" onClick={handleClick}  autoFocus>
            
            About
          </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="Projects" onClick={handleClick}>
            
            Projects
          </button>
          <button type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="Contact" onClick={handleClick}>
            
            Contact
          </button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  id="Skills" onClick={handleClick}>
            
            Skills
          </button>
        </div>
  
      </div>
    </nav>
    

     <About display={isShown}/>
     <Contact display={isShown}/>
     <Projects display={isShown}/>
     <Skills display={isShown}/>   
    </div>
  );
}

export default Nav;
