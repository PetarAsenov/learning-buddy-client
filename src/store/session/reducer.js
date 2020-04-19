import {
  FETCH_SESSIONS_SUCCESS,
  BOOK_SESSION_SUCCESS,
  UNBOOK_SESSION_SUCCESS,
} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SESSIONS_SUCCESS:
      return action.payload;
    case BOOK_SESSION_SUCCESS:
      return state.map((session) => {
        if (session.id === action.payload.session_id) {
          return {
            ...session,
            participants: [...session.participants, action.payload],
          };
        } else {
          return session;
        }
      });
    case UNBOOK_SESSION_SUCCESS:
      return state.map((session) => {
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
      });
    default:
      return state;
  }
};
