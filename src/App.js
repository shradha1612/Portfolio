import React from 'react'
import './App.css';
import Mynavbar from './components/navbar/navbar'
import Home from './components/container/container'
// import Title from './components/typewriter/title'
import About from './components/pages/about/About'
import Skills from './components/pages/skills/Skills'
import Experience from './components/pages/experience/Experience';
import Techskills from './components/pages/techskills/Techskills';
import Fade from "react-reveal/Fade"
//components


function App() {
  return (
    <>
    <Home/>
   <Mynavbar/>
    <About/>
    {/* <Skills/> */}
   <Techskills/>
   <Experience/>
   </>
  );
}

export default App;
