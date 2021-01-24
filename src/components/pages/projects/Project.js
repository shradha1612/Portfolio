import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import sadda from "../../assets/sadda.jpg";
import ClassroomUpdate from "../../assets/ClassroomUpdate.PNG";
import Capture from "../../assets/Capture.PNG";
import Chitchat from "../../assets/Chitchat.PNG";
import ccc3 from "../../assets/ccc3.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
// import {skills} from "./skills/skillsdata";
import CardDeck from 'react-bootstrap/CardDeck';

import "./Project.css";
const Project = () => {
  return (
    <div className="projectcontainer" id="projects">
      <div>
        <h1 className="pt-3 text-center pb-2">Projects</h1>
        <h6 className="text-center pb-3">Here are few selected projects, for more check github! 
        {/* <div>
<a href="https://github.com/shradha1612">
<Button variant="flat">See live</Button>

</a>
                </div> */}

        </h6>
      </div>
      <style type="text/css">
    {`
    .btn-flat {
      background-color:  rgb(56, 120, 124);
      color: white;
    }
    
    `}
  </style>

      <Container >
        {/* <div style={{border:"primary"}}> */}
        <CardDeck className="pt-3 pb-3">
          <Row className="d-flex justify-content-around">
            <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">Classroom Update</Card.Title>
                  <hr />
              <Card.Img variant="top" src={ClassroomUpdate} style={{height:"85%"}} />
              <Card.Body>
                <Card.Text>
                  This is small web application where students can see there classroom updates.
                  I made this project for learning firebase services like authentication and firestore.
                <Card.Title><h5>Tech.used- Firebase, html, css, js </h5></Card.Title>
                </Card.Text>
                <div>
<a href="https://classroom-update.web.app/">
<Button variant="flat">See live</Button>

</a>
                </div>
              </Card.Body>
                </Card.Body>
              </Card>

            </Col>
              <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Realtime Burger Order Application</Card.Title>
                  <hr />
              <Card.Img variant="top" src={Capture} style={{height:"70%",width:"98%"}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                It is a realtime burger order app where customer can create account, place
an order and can view status.
<h5>
Technology used:- Node Js, Express Js, Mongo DB, Tailwind
css ,Socket.io
</h5>

                </Card.Text>

                <div>
<a href="https://realtimeapp-burger-house.herokuapp.com/">
<Button variant="flat">See live</Button>

</a>
                </div>
              </Card.Body>
                </Card.Body>
              </Card>
              </Col>
              <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">CreativeCooks-Receipe book (PWA)</Card.Title>
                  <hr />
              <Card.Img variant="top" src={ccc3} style={{height:"250px",width:"98%"}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  It is a progressive web app. I build this for learning concepts of how PWAand how it actually works.
            
                </Card.Text>
                <div>
<a href="https://creative-cook.web.app/">
<Button variant="flat">See live</Button>

</a>
                </div>

              </Card.Body>
                </Card.Body>
              </Card>
              </Col>
              <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">ChitChat</Card.Title>
                  <hr />
              <Card.Img variant="top" src={Chitchat} style={{height:"250px",width:"98%"}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  A basic chatting application.
                  <h5>Tech used- nodeJs and socket.io</h5>
                </Card.Text>
                <div>
<a href="https://chitchat1612.herokuapp.com/">
<Button variant="flat">See live</Button>

</a>
                </div>

              </Card.Body>
                </Card.Body>
              </Card>
              </Col>
              
          </Row>
        </CardDeck>
        {/* </div> */}
        </Container>

    </div>
  );
};
export default Project;
