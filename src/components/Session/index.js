import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { utcToZonedTime } from "date-fns-tz";
import { useSelector, useDispatch } from "react-redux";
import { bookSession, unBookSession } from "../../store/session/actions";
import { NavLink } from "react-router-dom";

export default function Session({ session, teacher, btn }) {
  const startDate = utcToZonedTime(session.start_date, "YYYY")
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
    <Jumbotron>
      <h1>{session.title}</h1>
      <p>{session.description}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <div>
        {teacher && <p>Teacher: {session.teacher.name}</p>}
        <p>Participants: {session.participants.length}</p>
        {!btn ? null : !token ? (
          <NavLink to="/login">Login to register</NavLink>
        ) : (
          <Button onClick={onClickHandler}>
            {isRegistered ? "Unregister" : "Register"}
          </Button>
        )}
      </div>
    </Jumbotron>
  );
}
