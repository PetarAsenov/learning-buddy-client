import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { utcToZonedTime } from 'date-fns-tz'
import { useSelector } from "react-redux";

export default function Session( {session} ) {
  const startDate = utcToZonedTime(session.start_date).toString().split(':00 GMT')[0]
  const endDate = utcToZonedTime(session.end_date).toString().split(':00 GMT')[0]
  const { token } = useSelector(selectUser);

  return (
    <Jumbotron>
      <h1>{session.title}</h1>
      <p>{session.description}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <div>
      </div>
      <p>Teacher: {session.teacher.name}</p>
      <p>Participants: {session.participants.length}</p>
        {token ? (
            <Button onClick={()=>console.log(session.id)}>Register</Button>
        ) : null}
    </Jumbotron>
  );
}
