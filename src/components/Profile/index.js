import React, { useState } from "react";
import Session from "../Session";
import Review from "../Review";
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
import { Container, CardDeck, ButtonGroup, CardGroup } from "react-bootstrap";
import PostReview from "../PostReview";

export default function Profile({ profile, participants, teacher }) {
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
      <Container style={{ margin: "20px auto" }}>
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
            {!teacher && (
              <Button onClick={() => setShowEditForm(!showEditForm)}>
                Edit
              </Button>
            )}
          </div>
        )}
        {showEditForm && (
          <EditProfile hideEditForm={() => setShowEditForm(!showEditForm)} />
        )}
        {teacher && <PostReview id={profile.id} />}
      </Container>
      <Container>
        {!teacher && isTeacher && (
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" value={teach} onClick={clickTeach}>
              You teach
            </Button>
            <Button variant="secondary" value={attend} onClick={clickAttend}>
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
                <div key={session.id}>
                  <Session
                    session={session}
                    teacher={false}
                    btn={false}
                    bg="light"
                  />
                  {participants && <Participants session={session} />}
                </div>
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
                <div key={session.id}>
                  <Session
                    session={session}
                    teacher={false}
                    btn={false}
                    bg="secondary"
                  />
                  {participants && <Participants session={session} />}
                </div>
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
            {profile.receivedReviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
          </Container>
        )}
      </Container>
    </div>
  );
}
