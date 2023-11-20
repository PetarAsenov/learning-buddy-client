import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CardDeck } from "react-bootstrap";
import Teacher from "../Teacher";
import { selectTeacher } from "../../store/teacher/selectors";
import { fetchTeachers } from "../../store/teacher/actions";

export default function ListTeachers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const teachers = useSelector(selectTeacher);

  return (
    <Container>
      <CardDeck>
        <Teacher teachers={teachers} />
      </CardDeck>
    </Container>
  );
}
