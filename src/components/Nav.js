import React, { useState } from "react";
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
        <svg
          className="h-16 w-16 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />{" "}
          <polyline points="17 6 23 6 23 12" />
        </svg>

        <span className="font-semibold text-xl tracking-tight">
          Rekha Renduchintala
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button type="button" id="About" onClick={handleClick}>
            
            About
          </button>
          <button type="button" id="Projects" onClick={handleClick}>
            
            Projects
          </button>
          <button type="button" id="Contact" onClick={handleClick}>
            
            Contact
          </button>
          <button type="button" id="Skills" onClick={handleClick}>
            
            Skills
          </button>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Resume
          </a>
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
