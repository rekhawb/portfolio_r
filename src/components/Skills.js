import React  from "react";

function Skills(props) {
  if (props.display === "Skills") {
    return (
      <div className="grid  pt-6 pl-6 pb-10 justify-content-center">
        <div className="grid grid-cols-2 place-content-center  w-screen">
          <div className="rounded overflow-hidden shadow-lg w-1/2">
            <div className="text-blue-900 font-bold text-xl mb-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1S1OMtnJIGYV9AiQ9kEI0qoB3tK84emqS"
                download
              >
                Download my Resume
              </a>
            </div>

            <div>
            <p>Proficiencies:</p>
            <p> Front End Technologies</p>
            <ul className="list-disc" >

<li className="list-disc mr-5 ml-5 pr-5 pl-5">
HTML
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
CSS
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
JAVASCRIPT
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
REACT
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
GRAPHQL
</li>
</ul>
</div>

<div>
<p> Back End Technologies</p>
            <ul className="list-disc" >

<li className="list-disc mr-5 ml-5 pr-5 pl-5">
NODE
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
EXPRESS
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
SEQUELIZE
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
SQL
</li>
<li className="list-disc mr-5 ml-5 pr-5 pl-5">
MONGODB
</li>

</ul>
</div>
            <div>
    

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
