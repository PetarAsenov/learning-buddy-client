import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron, Form, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { selectUser } from "../../store/user/selectors";
import { selectSubject } from "../../store/subject/selectors";
import { fetchSubjects } from "../../store/subject/actions";
import { createSession } from "../../store/session/actions";

export default function CreateSessionForm() {
  const { token } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const subjects = useSelector(selectSubject);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().getTime() + 1000 * 60 * 60
  );
  const [subjectId, setSubjectId] = useState("select");

  const history = useHistory();
  const dispatch = useDispatch();
  const teacherId = user.id;
  const isTeacher = !user.role || user.role === "teacher";

  if (token === null || !isTeacher) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      createSession(
        title,
        description,
        startDate,
        endDate,
        subjectId,
        teacherId
      )
    );
    setTitle("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date().getTime() + 60 * 60 * 1000);
    setSubjectId("select");
  }

  return (
    <>
      <Jumbotron>
        <h1>Create a new session</h1>
      </Jumbotron>
      <Form as={Col} md={{ span: 6, offset: 3 }}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Start time</Form.Label>
          <br />
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setEndDate(date.getTime() + 60 * 60 * 1000);
            }}
            showTimeSelect
            minDate={new Date()}
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>End time</Form.Label>
          <br />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            minDate={startDate}
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            as="select"
            value={subjectId}
            onChange={(event) => setSubjectId(event.target.value)}
          >
            <option defaultValue="select">select</option>
            {subjects.map((subject) => (
              <option value={subject.id} key={subject.id}>
                {subject.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
