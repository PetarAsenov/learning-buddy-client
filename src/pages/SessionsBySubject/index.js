import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from "../../store/subject/actions";
import Session from "../../components/Session";
import { selectSubjectById } from "../../store/subject/selectors";
import { utcToZonedTime } from "date-fns-tz";

export default function SessionsBySubject() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchSubjectDetails(id)), 100);
  }, [dispatch, id]);
  const subjectDetails = useSelector(selectSubjectById(id));
  const upcomingSessionsBySubject =
    subjectDetails &&
    subjectDetails.sessions &&
    subjectDetails.sessions.filter(
      (session) => utcToZonedTime(session.start_date) >= new Date()
    );
  const pastSessionsBySubject =
    subjectDetails &&
    subjectDetails.sessions &&
    subjectDetails.sessions.filter(
      (session) => utcToZonedTime(session.start_date) <= new Date()
    );

  return (
    <div>
      {subjectDetails && (
        <div>
          <img
            width="300px"
            src={subjectDetails.image_Url}
            alt={subjectDetails.name}
          />
          <h2>Upcoming Sessions</h2>
          {upcomingSessionsBySubject &&
            upcomingSessionsBySubject.map((session) => (
              <Session key={session.id} session={session} btn hideSubject/>
            ))}
          <h2>Past Sessions</h2>
          {pastSessionsBySubject &&
            pastSessionsBySubject.map((session) => (
              <Session key={session.id} session={session} btn hideSubject/>
            ))}
        </div>
      )}
    </div>
  );
}
