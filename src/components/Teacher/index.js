import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Teacher({ teachers }) {
  return teachers.map((teacher) => (
    <Link
      key={teacher.id}
      to={`/teachers/${teacher.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card style={{ width: "14rem", marginBottom:"1rem" }}>
        <Card.Img
          variant="top"
          src={
            teacher.image_Url ||
            "https://sportgeneeskunderotterdam.nl/wp-content/uploads/2019/07/no-image-available.png"
          }
          style={{ height: "12rem" }}
        />
        <Card.Body>
          <Card.Text>{teacher.name}</Card.Text>
          <Card.Text>{teacher.email}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  ));
}
