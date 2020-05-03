import React from "react";
import Card from "react-bootstrap/Card";

export default function Review({ review: { reviewer, rate, comment } }) {
  return (
    <Card
      bg="light"
      text="dark"
      style={{ minWidth: "14rem", marginBottom: "1rem" }}
    >
      <Card.Title>{reviewer.name}</Card.Title>
      <Card.Body>
        <Card.Text>{rate}</Card.Text>
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}
