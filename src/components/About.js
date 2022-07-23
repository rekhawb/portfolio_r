import React  from 'react';
           //grid  pt-6 pl-6 justify-content-center 
           //grid  grid-cols-2 place-content-center 
function About(props){
   
   if (props.display === "About")
   {
   
    return (
       
        <div className="container pb-10">
        <div className="grid grid-cols-3 gap-4 flex items-center">
        
    
    <div className="rounded  shadow-lg  ">
          
          <div className="text-gray-900 font-bold text-xl mb-2">ABOUT ME</div>
          <p className="text-gray-700 text-base leading-10"> Passionate full stack developer skilled in designing, developing and
        testing multiple web based applications incorporating a range of
        technologies. </p>
        <p className="text-gray-700 text-base leading-10">Experience in combining technology and design to create
        easy-to-use websites for users. Producing, maintaining and modifying
        dynamic and interactive user interfaces. </p>
        <p className="text-gray-700 text-base leading-10">Proven ability to use client
        input to create functional , creative and user friendly web pages.
        Worked on fixing website issues or bugs that arise.</p>
        
        </div>
      
        
        
        <div className="rounded shadow-lg">
  <div className="text-gray-900 font-bold text-xl mb-2"></div>
 <img src="./images/avatar.png" alt="about me" />
</div>
</div>

</div>
        
    );

   }
   
        
}


export default About;