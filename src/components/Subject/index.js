import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { fetchSubjects } from "../../store/subject/actions";
import { selectSubject } from "../../store/subject/selectors";

export default function Subject() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  const subjects = useSelector(selectSubject);

  return (
    <Carousel
      style={{ minHeight: "400px", marginBottom: "60px" }}
      className="animated"
    >
      {subjects.map(({ id, image_Url, name }) => {
        return (
          <Carousel.Item
            key={id}
            style={{
              backgroundColor: "#a5cf91",
              textAlign: "center",
              minHeight: "400px",
            }}
          >
            <Link
              to={`/subjects/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={image_Url}
                alt={name}
                style={{ height: "300px", marginTop: "20px" }}
              />
              <Carousel.Caption
                style={{ position: "static", marginBottom: "20px" }}
              >
                <h3 style={{ color: "black" }}>{name}</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
