import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from "../../store/subject/actions";
import Session from "../../components/Session";
import { selectSubject } from "../../store/subject/selectors";

export default function SessionsBySubject() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const subjects = useSelector(selectSubject);
  const subjectDetails =
    subjects && subjects.filter((subject) => subject.id === parseInt(id))[0];
  console.log(subjectDetails);

  useEffect(() => {
    dispatch(fetchSubjectDetails(id));
  }, [dispatch]);

  return (
    <div>
      {subjectDetails && (
        <div>
          <img width="300px" src={subjectDetails.image_Url} />
          {subjectDetails.sessions &&
            subjectDetails.sessions.map((session) => (
              <Session key={session.id} session={session} />
            ))}
        </div>
      )}
    </div>
  );
}
