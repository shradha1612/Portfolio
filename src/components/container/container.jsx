import React from 'react';
import slide from '../../components/themes/lightbulb.jpg';
import './container.css';
import Typewriter from 'typewriter-effect';
import SocialMedia from '../SocialMedia/SocialMedia';
 


function Container() {
    return (
       <>
       <div className="homepage">
       <img src={slide}/>
       <div className="centered">
           <div className="greetings">Hi, I am Shradha Parkhi</div>
           <div className="typewriter" style={{paddingBottom:"20px"}}>
           <Typewriter
        options={{
            strings: ['Web Developer', 'Front-end developer','Learner'],
            autoStart: true,
            loop:true,  
        }}
       />
        </div>
        <SocialMedia/>
       
       </div>
       </div>
       </>
    )
}

export default Container
