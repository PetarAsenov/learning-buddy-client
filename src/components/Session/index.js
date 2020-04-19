import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { utcToZonedTime } from "date-fns-tz";
import { useSelector, useDispatch } from "react-redux";
import { bookSession, unBookSession } from "../../store/session/actions";

export default function Session({ session }) {
  const startDate = utcToZonedTime(session.start_date)
    .toString()
    .split(":00 GMT")[0];
  const endDate = utcToZonedTime(session.end_date)
    .toString()
    .split(":00 GMT")[0];
  const { token, id } = useSelector(selectUser);
  const dispatch = useDispatch();

  const isRegistered = session.participants
    .map((participant) => participant.participant_id)
    .includes(id);

  const onClickHandler = () => {
    !isRegistered ?
    dispatch(bookSession(session.id))
    : dispatch(unBookSession(session.id));
  };
  
  return (
    <Jumbotron>
      <h1>{session.title}</h1>
      <p>{session.description}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <div></div>
      <p>Teacher: {session.teacher.name}</p>
      <p>Participants: {session.participants.length}</p>
      {!token ? null  : <Button onClick={onClickHandler}>{isRegistered ? 'Unregister' : 'Register'}</Button>}
    </Jumbotron>
  );
}
