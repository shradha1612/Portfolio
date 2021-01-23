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
        <h1 className="pt-3 text-center pb-3">Projects</h1>
      </div>
      <Container >
        <CardDeck className="pt-3 pb-3">
          <Row className="d-flex justify-content-around">
            <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">Classroom Update</Card.Title>
                  <hr />
              <Card.Img variant="top" src={ClassroomUpdate} style={{height:"85%"}} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card.Body>
              </Card>
              </Col>
              <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Realtime Burger Order Application</Card.Title>
                  <hr />
              <Card.Img variant="top" src={ccc3} style={{height:"250px",width:"98%"}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card.Body>
              </Card>
              </Col>
              <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Realtime Burger Order Application</Card.Title>
                  <hr />
              <Card.Img variant="top" src={Chitchat} style={{height:"250px",width:"98%"}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card.Body>
              </Card>
              </Col>
              
          </Row>
        </CardDeck>
        </Container>
    </div>
  );
};
export default Project;
