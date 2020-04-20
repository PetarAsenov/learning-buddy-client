import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { selectSubject } from "../../store/subject/selectors";
import { fetchSubjects } from "../../store/subject/actions";
import { createSession } from "../../store/session/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateSessionForm() {
  const { token } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const subjects = useSelector(selectSubject);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStart_date] = useState(new Date());
  const [end_date, setEnd_date] = useState(
    new Date().getTime() + 1000 * 60 * 60
  );
  const [subject_id, setSubject_id] = useState("select");

  const history = useHistory();
  const dispatch = useDispatch();
  const teacher_id = user.id;
  const isTeacher = !user.role ? true : user.role === "teacher";

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
        start_date,
        end_date,
        subject_id,
        teacher_id
      )
    );
    setTitle('')
    setDescription('')
    setStart_date(new Date())
    setEnd_date(new Date().getTime() + 60 * 60 * 1000 )
    setSubject_id('select')
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
            selected={start_date}
            onChange={(date) => {
              setStart_date(date)
              setEnd_date(date.getTime() + 60 * 60 * 1000);
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
            selected={end_date}
            onChange={(date) => setEnd_date(date)}
            showTimeSelect
            minDate={start_date}
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
            value={subject_id}
            onChange={(event) => setSubject_id(event.target.value)}
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
