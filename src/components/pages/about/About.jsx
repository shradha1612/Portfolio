import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import sadda from '../../assets/sadda.jpg'
import Button from 'react-bootstrap/Button'
import Slide from 'react-reveal/Slide';
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
                            <h1>Hi, I am Shradha Parkhi</h1>
                            <p>I am an Enthusiast Web developer.Learning new tech skills
                            <br/> I am an Enthusiast Web developer.Learning new tech<br/>I am an Enthusiast Web developer.Learning new tech .<br/>
                                original information content of a particular piece of writing; that is, the "text" of a
                                work is that primal symbolic arrangement of letters as originally composed, apart from later
                                alterations, deterioration, commentary, translations, paratext, etc.</p></div>
                                </Slide>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap" >
                            <div>
                                <a href="https://www.linkedin.com/in/shradha-parkhi-06054b191/" className="m-2"><Button className="info">Connect with me</Button></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/shradha-parkhi-06054b191/" className="m-2" ><Button variant="dark">Download my resume</Button></a>
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
