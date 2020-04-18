import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_SUBJECTS_SUCCESS = "FETCH_SUBJECTS_SUCCESS";

export const fetchSubjectsSuccess = (subjects) => ({
  type: FETCH_SUBJECTS_SUCCESS,
  payload: subjects,
});

export const fetchSubjects = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/subjects`);
      console.log(response.data)
      dispatch(fetchSubjectsSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};
