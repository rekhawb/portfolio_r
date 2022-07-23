import React, { useState } from 'react';

function About(props){
   
   if (props.display == "About")
   {
   
    return (
       
        <div className="grid  pt-6 pl-6 justify-content-center">
        <div className="grid grid-cols-2 place-content-center  w-screen">
           
    
    <div className="rounded overflow-hidden shadow-lg w-1/2">
          
          <div className="text-gray-900 font-bold text-xl mb-2">ABOUT ME</div>
          <p className="text-gray-700 text-base"> Passionate full stack developer skilled in designing, developing and
        testing multiple web based applications incorporating a range of
        technologies. Experience in combining technology and design to create
        easy-to-use websites for users. Producing, maintaining and modifying
        dynamic and interactive user interfaces. Proven ability to use client
        input to create functional , creative and user friendly web pages.
        Worked on fixing website issues or bugs that arise.</p>
        
        </div>
      
        
        
        <div className="rounded overflow-hidden shadow-lg w-1/2">
  <div className="text-gray-900 font-bold text-xl mb-2">ABOUT ME</div>
  <p className="text-gray-700 text-base"> Passionate full stack developer skilled in designing, developing and
testing multiple web based applications incorporating a range of
technologies. Experience in combining technology and design to create
easy-to-use websites for users. Producing, maintaining and modifying
dynamic and interactive user interfaces. Proven ability to use client
input to create functional , creative and user friendly web pages.
Worked on fixing website issues or bugs that arise.</p>
</div>
</div>

</div>
        
    );

   }
   
        
}


export default About;