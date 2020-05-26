import React from "react";
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col>
          <p>About us</p>
          <p>Contact us</p>
          <p>Privacy statement</p>
          <p>Terms and conditions</p>
          </Col>
          <Col>
          <p>Teaching and learning</p>
          <p>A good teacher's guideline</p>
          <p>A good learner's guideline</p>
          <p>FAQ</p>
          </Col>
          <Col>
          <p>Meet us on social media</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
