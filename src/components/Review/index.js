import React from "react";
import Card from "react-bootstrap/Card";

export default function Review({review}) {
  return (
    <Card bg='light' text='dark' style={{ minWidth: '14rem', marginBottom: '1rem' }}>
      <Card.Title>{review.reviewer.name}</Card.Title>
      <Card.Body>
      <Card.Text>{review.rate}</Card.Text>
      <Card.Text>{review.comment}</Card.Text>
      </Card.Body>
    </Card>
  )
}


