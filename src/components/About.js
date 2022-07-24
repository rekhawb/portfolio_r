import React  from 'react';
           //grid  pt-6 pl-6 justify-content-center 
           //grid  grid-cols-2 place-content-center 
function About(props){
   
   if (props.display === "About")
   {
   
    return (
       
        <div className="container pb-10 rounded-lg border-double">
        <div className="grid grid-cols-2 gap-4 flex items-center backdrop-grayscale">
        
    
    <div className="rounded  shadow-lg ">
          
          <div className="text-gray-900 font-bold text-xl mb-2  text-teal-500 hover:text-blue-600 ">ABOUT ME</div>
          <div className ="bg-white rounded-xl">
          <p className="text-gray-700 text-base leading-10 text-2xl indent-8 tracking-wider text-teal-500 hover:text-blue-600  pb-5 mb-5"> Passionate full stack developer skilled in designing, developing and
        testing multiple web based applications incorporating a range of
        technologies. </p>
        </div>
        <div className ="bg-white rounded-xl">
        <p className="text-gray-700 text-base leading-10 text-2xl indent-8 tracking-wider text-teal-500 hover:text-blue-600 pb-5 mb-5"> Experience in combining technology and design to create
        easy-to-use websites for users. Producing, maintaining and modifying
        dynamic and interactive user interfaces. </p>
        </div>
        <div className ="bg-white rounded-xl">
        <p className="text-gray-700 text-base leading-10 text-2xl indent-8 tracking-wider text-teal-500 hover:text-blue-600"> Proven ability to use client
        input to create functional , creative and user friendly web pages.
        Worked on fixing website issues or bugs that arise.</p>
        </div>
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