import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSessions } from "../../store/session/actions";
import Session from "../../components/Session";
import { selectSession } from "../../store/session/selectors";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ListSessions() {
  const dispatch = useDispatch();
  const sessions = useSelector(selectSession);
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    dispatch(fetchSessions(search));
  }, [dispatch, search]);

  return (
    <div>
      <Form as={Col} md={{ span: 3, offset: 0 }} className="mt-5">
        <Form.Group controlId="formBasicName">
          <Form.Control
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Search by title"
            required
          />
        </Form.Group>
      </Form>
      {sessions &&
        sessions.map((session) => (
          <Session key={session.id} session={session} />
        ))}
    </div>
  );
}
