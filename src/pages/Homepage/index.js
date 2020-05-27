import React from "react";
import { Link } from "react-router-dom";
// import ListTeachers from "../../components/ListTeachers";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./styles.css";
import Video from "../../components/VideoEmbed";
// import Subject from "../../components/Subject";

export default function index() {
  return (
    <Container>
      <Row className="welcome">
        <Col  md={{ span: 6, offset: 0 }}>
          <h3>Here you can learn or help others learn</h3>
          <br/>
          <p>
            Learning buddy platform helps children improve in their studies by
            connecting them with volunteering mentors for a personalized and
            digital learning session
          </p>
        </Col>
        <Col md={{ span: 6, offset: 0 }}>
          <Video youtubeId="n3l1D6cv5ZE" />
          <p className="quote">
            "This will make my life so much easier!" Tim - 4th grade
          </p>
          {/* <Subject /> */}
        </Col>
      </Row>
      {/* <ListTeachers /> */}
      <Row style={{justifyContent:"center"}} className="mt-5">
      <Link to="/teachers">
        <Button variant="primary" className="mr-3 px-5 py-2">See our teachers</Button>
      </Link>
      <Link to="/sessions">
        <Button variant="primary" className="ml-3 px-5 py-2">See our sessions</Button>
      </Link>
      </Row>
    </Container>
  );
}
