import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/subject/actions";
import { selectSubject } from "../../store/subject/selectors";
import Subject from "../Subject";
import { Col, Row } from "react-bootstrap";

export default function ListSubjects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  const subjects = useSelector(selectSubject);

  return (
    <Row>
      <Col md={{ span: 5, offset: 0 }}>
        <h1>Welcome</h1>
      </Col>
      <Col md={{ span: 5, offset: 5 }}>
        <Subject subjects={subjects} />
      </Col>
    </Row>
  );
}
