import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagramSquare,
  faFacebookSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>About us</ListGroup.Item>
          <ListGroup.Item>Contact us</ListGroup.Item>
          <ListGroup.Item>Privacy statement</ListGroup.Item>
          <ListGroup.Item>
            <Link to="/terms" style={{color: "#212529"}}>Terms and Conditions</Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>Teaching and learning</ListGroup.Item>
          <ListGroup.Item>A good teacher's guideline</ListGroup.Item>
          <ListGroup.Item>A good learner's guideline</ListGroup.Item>
          <ListGroup.Item>FAQ</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Text id="follow-us">
          <strong>Follow us on:</strong>
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          <FontAwesomeIcon icon={faYoutubeSquare} size="lg" />
        </Card.Text>
      </Card>
    </div>
  );
}
