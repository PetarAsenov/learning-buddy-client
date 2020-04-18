import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default function Subject({ subject }) {

  return (
    <Link to={`/books/${subject.name}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="subject">
        <img width="300px"  height="180px" src={subject.image_Url} alt={subject.name} />
        <h2><strong>{subject.name}</strong></h2>
        <br />
      </div>
    </Link>
  )
}