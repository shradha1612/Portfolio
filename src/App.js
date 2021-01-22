import React from 'react'
import './App.css';
import Mynavbar from './components/navbar/navbar'
import Home from './components/container/container'
import About from './components/pages/about/About'
import Experience from './components/pages/experience/Experience';
import Techskills from './components/pages/techskills/Techskills';
import Project from './components/pages/projects/Project';
import Contact from './components/pages/contact/Contact';
import { Footer } from './components/pages/footer/Footer';



function App() {
  return (
    <>
    <Home/>
    <Mynavbar/>
    <About/>
   <Techskills/>
   <Experience/>
   <Project/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
