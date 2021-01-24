import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

const Project = () => {
  return (
    <div
      className="projectcontainer"
      id="projects"
    //   style={{ background: "#2d7a80" }}
    >
      <div>
        <h1 className="pt-3 text-center pb-2">Tech Blogs!</h1>
      </div>
      <style type="text/css">
        {`
    .btn-flat {
      background-color:  rgb(56, 120, 124);
      color: white;
    }
    
    `}
      </style>

      <Container>
        <CardDeck className="pt-2 pb-3">
          <Row className="d-flex justify-content-around">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center card-title">
                  Google Assistant Contr- olled Home Automation.
                    
                  </Card.Title>
                  <div style={{textAlign:"center"}}>
                      <a href="https://codewebtech.medium.com/google-assistant-controlled-home-automation-38aa3e422873">
                        <Button variant="flat">Read</Button>
                      </a>
                    </div>
                  
                  
                  
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center card-title ">
                  Remove all console.log() from code.
                  </Card.Title>
                  <div style={{textAlign:"center"}}>
                      <a href="https://codewebtech.medium.com/remove-all-console-log-from-code-f0e52f6e1762">
                        <Button variant="flat">Read</Button>
                      </a>
                    </div>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card >
                <Card.Body>
                  <Card.Title className="text-center card-title">
                  Higher-order Functions in JavaScript
                  </Card.Title>
                  <div style={{textAlign:"center"}}>
                      <a href="https://codewebtech.medium.com/higher-order-functions-in-javascript-42563777203">
                        <Button variant="flat">Read</Button>
                      </a>
                    </div>
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
