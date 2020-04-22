import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSessions } from "../../store/session/actions";
import Session from "../../components/Session";
import { selectUpcomingSessions, selectPastSessions } from "../../store/session/selectors";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ListSessions() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const upcomingSessions = useSelector(selectUpcomingSessions)
  const pastSessions = useSelector(selectPastSessions)
  
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
      <h2>Upcoming Sessions</h2>
      {upcomingSessions &&
        upcomingSessions.map((session) => (
          <Session key={session.id} session={session} teacher={true} btn={true}/>
        ))}
      <h2>Past Sessions</h2>
      {pastSessions &&
        pastSessions.map((session) => (
          <Session key={session.id} session={session} teacher={true} btn={false}/>
        ))}
    </div>
  );
}
