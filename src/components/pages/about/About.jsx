import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/Profile.jpg'

const About = () => {
    return (
        <>
        <div id="about">
            <h1>About Me</h1>
            <Container>
                <Row>
                    {/* profile pic */}
                    <Col xs={12} md={6}>
                    <Row>
                    <Image src={Profile} thumbnail />
                    </Row>
                    </Col>
                    {/* About description */}
                    <Col xs={12} md={6}>
                        <h1>gjyvfthc</h1>
                    </Col>
                    
                </Row>
            </Container>
        </div>
            
        </>
    )
}

export default About;
