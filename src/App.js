import React from 'react'
import './App.css';
import Mynavbar from './components/navbar/navbar'
import Container from './components/container/container'
// import Title from './components/typewriter/title'
import About from './components/pages/about/About'
import Skills from './components/pages/skills/Skills'
import Experience from './components/pages/experience/Experience';

//components


function App() {
  return (
    <>
    <Container/>
   <Mynavbar/>
   <About/>
   <Skills/>
   <Experience/>
   </>
  );
}

export default App;
