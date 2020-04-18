import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_SESSIONS_SUCCESS = "FETCH_SESSIONS_SUCCESS";

export const fetchSessionsSuccess = (sessions) => ({
  type: FETCH_SESSIONS_SUCCESS,
  payload: sessions,
});


export const fetchSessions = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/sessions`);
      dispatch(fetchSessionsSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

