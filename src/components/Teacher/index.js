import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Teacher({ teachers }) {
  return teachers.map(({ id, image_Url, name, email }) => (
    <Link
      key={id}
      to={`/teachers/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card style={{ width: "14rem", marginBottom: "1rem" }}>
        <Card.Img
          variant="top"
          src={
            image_Url ||
            "https://sportgeneeskunderotterdam.nl/wp-content/uploads/2019/07/no-image-available.png"
          }
          style={{ height: "12rem" }}
        />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  ));
}
