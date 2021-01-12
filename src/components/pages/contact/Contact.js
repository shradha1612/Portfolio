import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import './Contact.css'
import SocialMedia from '../../SocialMedia/SocialMedia';
const Contact = () => {
    return (
        <div className="contactsection">
            <div>
            <h1 className='pt-3 text-center pb-3' style={{color:"white"}}>Reach out to me!</h1>
            </div>
            <Container>
                <h1>
                    
                </h1>
                <SocialMedia/>
            </Container>
        </div>
    )
}
export default Contact;
