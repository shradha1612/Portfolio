import React from 'react';
import slide from '../../components/themes/lightbulb.jpg';
import './container.css';
import Typewriter from 'typewriter-effect';
import SocialMedia from '../SocialMedia/SocialMedia';
import emoji from 'react-easy-emoji';
 
// import Particles from 'react-particles-js';

function Home() {
    return (
       <>
       <div className="homepage" id="main">
           {/* <div className="parallaxfix"> */}

       <img src={slide}/>
           {/* </div> */}
           {/* <Particles 
                params={{
                    "particles":{
                        "number":{
                            "value":50
                        },
                        "size":{
                            "value":3
                        }
                    },
                    "interactivity":{
                        "events":{
                            "onhover":{
                                "enable":true,
                                "mode":"repulse"
                            }
                        }
                    }
                }} /> */}
       <div className="centered">
           <div className="greetings">
               Hi, I am Shradha Parkhi <span className="wave-emoji">{emoji('👋')}</span>

           </div>
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

export default Home;
