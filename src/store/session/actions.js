import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_SESSIONS_SUCCESS = "FETCH_SESSIONS_SUCCESS";
export const BOOK_SESSION_SUCCESS = "BOOK_SESSION_SUCCESS";
export const UNBOOK_SESSION_SUCCESS = "UNBOOK_SESSION_SUCCESS";
export const CREATE_SESSION_SUCCESS = "CREATE_SESSION_SUCCESS";

export const fetchSessionsSuccess = (sessions) => ({
  type: FETCH_SESSIONS_SUCCESS,
  payload: sessions,
});

export const bookSessionSuccess = (participant) => ({
  type: BOOK_SESSION_SUCCESS,
  payload: participant,
});

export const unBookSessionSuccess = (participant) => ({
  type: UNBOOK_SESSION_SUCCESS,
  payload: participant,
});

export const createSessionSuccess = (session) => ({
  type: CREATE_SESSION_SUCCESS,
  payload: session,
});

export const fetchSessions = (search = "") => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/sessions?title=${search}`);
      dispatch(fetchSessionsSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const bookSession = (id) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    dispatch(appLoading());
    try {
      const response = await axios.post(
        `${apiUrl}/session/${id}/book`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(bookSessionSuccess(response.data.participant));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "You booked this session, enjoy!"
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const unBookSession = (id ) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    dispatch(appLoading());
    try {
      const response = await axios.delete(
        `${apiUrl}/session/${id}/book`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(unBookSessionSuccess(response.data.participantCheck));
      dispatch(
        showMessageWithTimeout("success", true, "You unbooked successfully")
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const createSession = (
  title,
  description,
  start_date,
  end_date,
  subject_id,
  teacher_id
) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    dispatch(appLoading());
    try {
      const response = await axios.post(
        `${apiUrl}/sessions`,
        { title, description, start_date, end_date, subject_id, teacher_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(createSessionSuccess(response.data.session));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "You created a session, happy teaching!"
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
