import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_SUBJECTS_SUCCESS = "FETCH_SUBJECTS_SUCCESS";
export const FETCH_SUBJECT_DETAILS_SUCCESS = "FETCH_SUBJECT_DETAILS_SUCCESS";

export const fetchSubjectsSuccess = (subjects) => ({
  type: FETCH_SUBJECTS_SUCCESS,
  payload: subjects,
});

export const fetchSubjectDetailsSuccess = (subject) => ({
  type: FETCH_SUBJECT_DETAILS_SUCCESS,
  payload: subject,
});

export const fetchSubjects = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/subjects`);
      dispatch(fetchSubjectsSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const fetchSubjectDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/subjects/${id}`);
      dispatch(fetchSubjectDetailsSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};