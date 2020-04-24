import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { selectUser } from "../../store/user/selectors";
import { utcToZonedTime } from "date-fns-tz";
import { useSelector, useDispatch } from "react-redux";
import { bookSession, unBookSession } from "../../store/session/actions";
import { NavLink } from "react-router-dom";


export default function Session({ session, teacher, btn, hideSubject,bg }) {
  const startDate = utcToZonedTime(session.start_date, "Europe/Berlin")
    .toString()
    .slice(0, 21);
  const endDate = utcToZonedTime(session.end_date, "Europe/Berlin")
    .toString()
    .slice(0, 21);
  const { token, id } = useSelector(selectUser);
  const dispatch = useDispatch();

  const isRegistered = session.participants
    .map((participant) => participant.participant_id)
    .includes(id);

  const onClickHandler = () => {
    !isRegistered
      ? dispatch(bookSession(session.id))
      : dispatch(unBookSession(session.id));
  };

  return (
    <Card bg={bg} text={ bg === 'light' ? 'dark' : 'white'} style={{ maxWidth: '14rem',minWidth: '14rem', display:'flex', marginBottom: '1rem' }}>
      <Card.Body>
      <Card.Title>{session.title}</Card.Title>
      <Card.Text>{session.description}</Card.Text>
      <Card.Text>{startDate}</Card.Text>
      <Card.Text>{endDate}</Card.Text>
      {!hideSubject && <Card.Text>Subject: {session.subject.name}</Card.Text>}
      <div>
        {teacher && <Card.Text>Teacher: {session.teacher.name}</Card.Text>}
        <Card.Text>Participants: {session.participants.length}</Card.Text>
        {!btn ? null : !token ? (
          <NavLink to="/login">Login to register</NavLink>
          ) : (
            <Button onClick={onClickHandler}>
            {isRegistered ? "Unregister" : "Register"}
          </Button>
        )}
      </div>
        </Card.Body>
      </Card>
  );
}
