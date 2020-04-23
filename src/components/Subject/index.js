import React from "react";
import { Link  } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel";

export default function Subject({subjects}) {

  
  return (
    
    <Carousel
      style={{ minHeight: "400px", marginBottom: "60px" }}
      className="animated"
    >
      {subjects.map((subject) => {
        return (
          <Carousel.Item
            key={subject.id}
            style={{
              backgroundColor: "#a5cf91",
              textAlign: "center",
              minHeight: "400px",
            }}
          >
              <Link to={`/subjects/${subject.id}`} style={{ textDecoration: "none", color: "black" }}>
            <img
              src={subject.image_Url}
              alt={subject.name}
              style={{ height: "300px", marginTop: "20px" }}
            />
            <Carousel.Caption
              style={{ position: "static", marginBottom: "20px" }}
            >
              <h3 style={{ color: "black" }}>{subject.name}</h3>
            </Carousel.Caption>
            </Link >
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
