import React from "react";
import ListTeachers from "../../components/ListTeachers";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
import Video from "../../components/VideoEmbed"
// import Subject from "../../components/Subject";

export default function index() {
  return (
    <div>
      <Row style={{ dispaly: "flex" }}>
        <Col className="welcome" md={{ span: 5, offset: 1 }}>
          <h2>
            Welcome to the Learning Buddy platform
            <br />
            <br />
            Here you can learn and help others learn
          </h2>
          <br />
          <p>
            Register for an upcoming session to experience
            <br /> the personal and interactive learning
            <br /> with one of our volunteering teachers{" "}
          </p>
        </Col>
        <Col md={{ span: 5, offset: 0 }}>
          <Video youtubeId="TH-HXV-Bn6Y"/>
          {/* <Subject /> */}
        </Col>
      </Row>
      <ListTeachers />
    </div>
  );
}
