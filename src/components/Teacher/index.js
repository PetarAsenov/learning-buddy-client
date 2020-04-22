import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Teacher({ teachers }) {
  return teachers.map((teacher) => (
    <Link
      to={`/teachers/${teacher.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="teacher">
        <img
          width="150px"
          height="200px"
          src={
            teacher.image_Url ||
            "https://sportgeneeskunderotterdam.nl/wp-content/uploads/2019/07/no-image-available.png"
          }
          alt={teacher.name}
        />
        <h2>
          <strong>{teacher.name}</strong>
        </h2>
        <p>{teacher.email}</p>
        <br />
      </div>
    </Link>
  ));
}
