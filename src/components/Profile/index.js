import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, CardDeck, ButtonGroup, Button, Col, Row } from "react-bootstrap";
import Session from "../Session";
import Review from "../Review";
import {
  selectUpcomingSessionByTeacher,
  selectPastSessionByTeacher,
  selectUpcomingSessionByParticipant,
  selectPastSessionByParticipant,
} from "../../store/session/selectors";
import ProfileData from "./myProfile";

export default function Profile({ profile, teacher }) {
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
  const [teach, setTeach] = useState(false);
  const [attend, setAttend] = useState(true);

  function clickTeach() {
    if (!teach) {
      setTeach(true);
      setAttend(false);
    }
  }
  function clickAttend() {
    if (!attend) {
      setAttend(true);
      setTeach(false);
    }
  }
  const teacherOrUser = teacher ? true : teach;

  return (
    <div>
      <ProfileData profile={profile} teacher={teacher} />
      <Container >
        {!teacher && isTeacher && (
          <ButtonGroup aria-label="Basic example" as={Row}  style={{width: "100%"}} size="lg">
            <Button
              variant="secondary"
              value={teach}
              onClick={clickTeach}
              as={Col}
              md={{ span: 4, offset: 2 }}
              block
            >
              You teach
            </Button>
            <Button variant="secondary" value={attend} onClick={clickAttend} as={Col}
              md={{ span: 4, offset: 0}}>
              You attend
            </Button>
          </ButtonGroup>
        )}
        {isTeacher && teacherUpcomingSessions && teacherOrUser && (
          <Container>
            <br />
            {!teacher && <h2>Sessions you teach</h2>}
            <br />
            <br />
            <h2>Upcoming Sessions</h2>
            <br />
            <CardDeck>
              {teacherUpcomingSessions.map((session) => (
                <Session
                  key={session.id}
                  session={session}
                  teacher={false}
                  btn={teacher}
                  bg="light"
                  showParticipants={!teacher}
                />
              ))}
            </CardDeck>
          </Container>
        )}
        {isTeacher && teacherPastSessions && teacherOrUser && (
          <Container>
            <br />
            <h2>Past Sessions</h2>
            <br />
            <CardDeck>
              {teacherPastSessions.map((session) => (
                <Session
                  key={session.id}
                  session={session}
                  teacher={false}
                  btn={false}
                  bg="secondary"
                  showParticipants={!teacher}
                />
              ))}
            </CardDeck>
          </Container>
        )}
        {!teacher && participantUpcomingSessions && attend && (
          <Container>
            <br />
            <h2>Sessions you attend</h2>
            <br />
            <br />
            <h2>Upcoming Sessions</h2>
            <br />
            <CardDeck>
              {participantUpcomingSessions.map((session) => (
                <Session
                  key={session.id}
                  session={session}
                  teacher
                  btn
                  bg="light"
                />
              ))}
            </CardDeck>
          </Container>
        )}
        {!teacher && participantPastSessions && attend && (
          <Container>
            <br />
            <h2>Past Sessions</h2>
            <br />
            <CardDeck>
              {participantPastSessions.map((session) => (
                <Session
                  key={session.id}
                  session={session}
                  teacher
                  btn={false}
                  bg="secondary"
                />
              ))}
            </CardDeck>
          </Container>
        )}
        {isTeacher && profile.receivedReviews && (
          <Container>
            <br />
            <h2>Reviews</h2>
            <br />
            {profile.receivedReviews.map(
              (review) =>
                review.reviewer && <Review key={review.id} review={review} />
            )}
          </Container>
        )}
      </Container>
    </div>
  );
}
