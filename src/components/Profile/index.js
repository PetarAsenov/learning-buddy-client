import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Session from "../Session";
import EditProfile from "./EditProfile";
import Participants from "./Participants";
import Button from "react-bootstrap/Button";
import {
  selectUpcomingSessionByTeacher,
  selectPastSessionByTeacher,
  selectUpcomingSessionByParticipant,
  selectPastSessionByParticipant,
} from "../../store/session/selectors";
import { useSelector } from "react-redux";
import { Container, CardDeck } from "react-bootstrap";

export default function Profile({ profile, btn, participants }) {
  const isTeacher = profile.role === "teacher";
  const teacherUpcomingSessions = useSelector(
    selectUpcomingSessionByTeacher(profile.id)
  );
  const teacherPastSessions = useSelector(
    selectPastSessionByTeacher(profile.id)
  );
  const participantUpcomingSessions = useSelector(
    selectUpcomingSessionByParticipant(profile.id)
  );
  const participantPastSessions = useSelector(
    selectPastSessionByParticipant(profile.id)
  );
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <Jumbotron>
      <h1>{profile.name}</h1>
      {!showEditForm && (
        <div>
          <img
            width="130px"
            height="180px"
            src={
              profile.image_Url ||
              "https://sportgeneeskunderotterdam.nl/wp-content/uploads/2019/07/no-image-available.png"
            }
            alt={profile.name}
          />
          <p>{profile.description}</p>
          {btn && (
            <Button onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>
          )}
        </div>
      )}

      {showEditForm && (
        <EditProfile hideEditForm={() => setShowEditForm(!showEditForm)} />
      )}
      {isTeacher &&
        teacherUpcomingSessions && <Container ><CardDeck>
        {teacherUpcomingSessions.map((session) => (
          <div>
            <Session
              key={session.id}
              session={session}
              teacher={false}
              btn={false}
              bg="light"
            />
            {participants && <Participants session={session} />}
          </div>
        ))}
        </CardDeck></Container >}
      {isTeacher &&
        teacherPastSessions && <Container ><CardDeck>
        {teacherPastSessions.map((session) => (
          <div>
            <Session
              key={session.id}
              session={session}
              teacher={false}
              btn={false}
              bg="secondary"
            />
            {participants && <Participants session={session} />}
          </div>
        ))}
        </CardDeck></Container >}
      {participantUpcomingSessions && <Container ><CardDeck>
        {participantUpcomingSessions.map((session) => (
          <Session key={session.id} session={session} teacher btn bg="light"/>
        ))}
      {participantPastSessions &&
        participantPastSessions.map((session) => (
          <Session key={session.id} session={session} teacher btn={false} bg="secondary"/>
        ))}
        </CardDeck></Container >}
      {isTeacher &&
        profile.receivedReviews && <Container ><CardDeck>
        {profile.receivedReviews.map((review) => (
          // <Review key={review.id} session={review} />
          <div key={review.id}>
            <p>{review.rate}</p>
            <p>{review.comment}</p>
          </div>
        ))}
        </CardDeck></Container >}
    </Jumbotron>
  );
}
