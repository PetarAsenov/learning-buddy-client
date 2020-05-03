import {
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECT_DETAILS_SUCCESS,
} from "./actions";
import {
  BOOK_SESSION_SUCCESS,
  UNBOOK_SESSION_SUCCESS,
} from "../session/actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_SUCCESS:
      return action.payload;
    case FETCH_SUBJECT_DETAILS_SUCCESS: {
      return state.map((subject) =>
        subject.id === action.payload.id
          ? { ...subject, ...action.payload }
          : subject
      );
    }
    case BOOK_SESSION_SUCCESS:
      return state.map((subject) => {
        return {
          ...subject,
          sessions:
            subject.sessions &&
            subject.sessions.map((session) =>
              session.id === action.payload.session_id
                ? {
                    ...session,
                    participants: [...session.participants, action.payload],
                  }
                : session
            ),
        };
      });
    case UNBOOK_SESSION_SUCCESS:
      return state.map((subject) => {
        return {
          ...subject,
          sessions:
            subject.sessions &&
            subject.sessions.map((session) => {
              if (session.id === action.payload.session_id) {
                const filteredParticipants = session.participants.filter(
                  (participant) => participant.id !== action.payload.id
                );
                return {
                  ...session,
                  participants: [...filteredParticipants],
                };
              } else {
                return session;
              }
            }),
        };
      });

    default:
      return state;
  }
};
