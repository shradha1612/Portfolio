import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import "./Contact.css";
import SocialMedia from "../../SocialMedia/SocialMedia";
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';

import emailjs from 'emailjs-com';

function sendEmail(e) {
  console.log('click')
  e.preventDefault();

  emailjs.sendForm('service_eb103tw', 'portfolio_fg58ekh', e.target, 'user_3S2rU57dnC0Rvbn5RHegs')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}



const Contact = () => {
  return (
    <div className="contactsection">
      <div>
        <h1 className="pt-3 text-center pb-3" style={{ color: "black" }}>
          Reach out to me!
        </h1>
      </div>
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="contact-info">
              <h4>Let's Connect!</h4>
              <p></p>
              <div className="icon-text">
                <i className="icon"></i>
                {/* <span>text</span> */}
              </div>
              <SocialMedia />
            </div>
          </Col>

          <div id="contact-container">
          <form onSubmit={sendEmail}>

                <div class="form-display">
            <Col md={6} xs={12}>

                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname"  required/>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastname" required/>
                  </div>
            </Col>
            <Col md={6} xs={12}>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="message" required />
                  </div>
            </Col>
            <Col md={12}>
          
            <Button className="info" type="submit">Send Message</Button>
            
            </Col>
            </div>
           
            </form>

        </div>

          </Row>
      </Container>
    </div>
  );
};
export default Contact;
