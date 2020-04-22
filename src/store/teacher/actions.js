import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_TEACHERS_SUCCESS = "FETCH_TEACHERS_SUCCESS";
export const FETCH_TEACHER_DETAILS_SUCCESS = "FETCH_TEACHER_DETAILS_SUCCESS";

export const fetchTeachersSuccess = (teacher) => ({
  type: FETCH_TEACHERS_SUCCESS,
  payload: teacher,
});

export const fetchTeacherDetailsSuccess = (subject) => ({
  type: FETCH_TEACHER_DETAILS_SUCCESS,
  payload: subject,
});

export const fetchTeachers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/teachers`);
      dispatch(fetchTeachersSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const fetchTeacherDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/teacher/${id}`);
      dispatch(fetchTeacherDetailsSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};