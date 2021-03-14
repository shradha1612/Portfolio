import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import sadda from '../../assets/Profile.jpg'
import Button from 'react-bootstrap/Button'
import Slide from 'react-reveal/Slide';

// import emoji from 'react-easy-emoji';
import './About.css'
const About = () => {
    return (
        <>
        <div id="about">
        <div className="about pb-5">
            <h1 className='pt-3 text-center pb-3'>About Me</h1>
            <Container className="cardcontainer">
                <Row className="pt-5 pb-5 align-items-center">
                    {/* profile pic */}
                    <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2">
                    <Slide left>
                    <Image className="profile justify-content-end" alt="profile" src={sadda} thumbnail fluid/>
                    </Slide>
                    </Row>
                    </Col>
                    {/* About description */}
                    <Col xs={12} md={6}>
                        <Row className="align-items-start p-2 pr-5 my-details rounded" >
                            <Slide right>
                                <div className="fo">
                            <h1>Hey, I am Shradha Parkhi</h1>
                            <h5 style={{color:"gray"}}>An Enthusiast web developer and a learner who is passionate about web technologies and building web applications.
                            <br/>Apart from programming I love singing an listening music. I used to write tech blogs sometimes. <br/></h5></div>
                                </Slide>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap" >
                            <div>
                                <a href="https://www.linkedin.com/in/shradha-parkhi-06054b191/" className="m-2">
                                <style type="text/css">
    {`
    .btn-flat {
      background-color:  rgb(56, 120, 124);
      color: white;
    }
    `}
  </style>
                                    <Button variant="flat" className="info">Connect with me</Button></a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/file/d/1cMxyBrIby5as5NjEZh09IVEv_IzPPvlF/view?usp=sharing" className="m-2" ><Button variant="dark">Download my resume</Button></a>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        </div>
        </div>
            
        </>
    )
}

export default About;
