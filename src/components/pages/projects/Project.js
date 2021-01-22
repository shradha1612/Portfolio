import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import sadda from "../../assets/sadda.jpg";
import ClassroomUpdate from "../../assets/ClassroomUpdate.PNG";
import Creativecook from "../../assets/cc3.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import "./Project.css";
const Project = () => {
  return (
    <div className="projectcontainer" id="projects">
      <div>
        <h1 className="pt-3 text-center pb-3">Projects</h1>
      </div>
      <Container>
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem"}} md={6}>
              <Card.Img variant="top" src={ClassroomUpdate} style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} >
            <Card style={{ width: "18rem" }} md={6}>
              <Card.Img variant="top" src={Creativecook} style={{height:"200px",width:"220px", paddingLeft:"40px"}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} md={6}>
              <Card.Img variant="top" src={sadda} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Project;
