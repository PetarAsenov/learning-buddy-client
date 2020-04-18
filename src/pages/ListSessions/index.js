import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSessions } from "../../store/session/actions";
import Session from "../../components/Session";
import { selectSession } from "../../store/session/selectors";

export default function ListSessions() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessions = useSelector(selectSession);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  return (
    <div>
          {sessions &&
            sessions.map((session) => (
              <Session key={session.id} session={session} />
            ))}
        </div>
  );
}
