import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from "../../store/subject/actions";
import Session from "../../components/Session";
import { selectSubjectById } from "../../store/subject/selectors";

export default function SessionsBySubject() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchSubjectDetails(id)), 100)
  }, [dispatch, id]);
  const subjectDetails = useSelector(selectSubjectById(id))

  return (
    <div>
      {subjectDetails && (
        <div>
          <img
            width="300px"
            src={subjectDetails.image_Url}
            alt={subjectDetails.name}
          />
          {subjectDetails.sessions &&
            subjectDetails.sessions.map((session) => (
              <Session key={session.id} session={session} showBtn={true} show={true} />
            ))}
        </div>
      )}
    </div>
  );
}
