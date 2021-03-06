import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from "../../store/subject/actions";
import Session from "../../components/Session";
import { selectSubjectById } from "../../store/subject/selectors";
import { utcToZonedTime } from "date-fns-tz";
import { Container, CardDeck } from "react-bootstrap";

export default function SessionsBySubject() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchSubjectDetails(id)), 100);
  }, [dispatch, id]);
  const subjectDetails = useSelector(selectSubjectById(id));
  const sessions = subjectDetails && subjectDetails.sessions;
  const upcomingSessionsBySubject =
    sessions &&
    sessions.filter(
      (session) =>
        utcToZonedTime(session.start_date, "Europe/Berlin") >= new Date()
    );
  const pastSessionsBySubject =
    sessions &&
    sessions.filter(
      (session) =>
        utcToZonedTime(session.start_date, "Europe/Berlin") <= new Date()
    );

  return (
    <Container>
      {subjectDetails && (
        <div>
          <img
            width="300px"
            src={subjectDetails.image_Url}
            alt={subjectDetails.name}
          />
          <h2>Upcoming Sessions</h2>
          {upcomingSessionsBySubject && (
            <Container>
              <CardDeck>
                {upcomingSessionsBySubject.map((session) => (
                  <Session
                    key={session.id}
                    session={session}
                    btn
                    hideSubject
                    bg="light"
                  />
                ))}
              </CardDeck>
            </Container>
          )}
          <h2>Past Sessions</h2>
          {pastSessionsBySubject && (
            <Container>
              <CardDeck>
                {pastSessionsBySubject.map((session) => (
                  <Session
                    key={session.id}
                    session={session}
                    btn={false}
                    hideSubject
                    bg="secondary"
                  />
                ))}
              </CardDeck>
            </Container>
          )}
        </div>
      )}
    </Container>
  );
}
