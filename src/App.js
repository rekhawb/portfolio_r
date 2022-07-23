import React from "react";

import Nav from "./components/Nav";

import Footer from "./components/Footer";

import './App.css';




function App() {
  

  return (
  <body class="h-full  bg-gradient-to-b from-blue-100 to-gray-300 m-5 p-5">
    <div className="container  ">
   <main>
    <Nav  />
    <Footer />
   </main>
   </div>
   </body>
  );
}

export default App;
