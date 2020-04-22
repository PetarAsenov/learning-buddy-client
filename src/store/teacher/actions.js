import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_TEACHERS_SUCCESS = "FETCH_TEACHERS_SUCCESS";
export const FETCH_TEACHER_DETAILS_SUCCESS = "FETCH_TEACHER_DETAILS_SUCCESS";
export const POST_REVIEW_SUCCESS = "POST_REVIEW_SUCCESS";

export const fetchTeachersSuccess = (teacher) => ({
  type: FETCH_TEACHERS_SUCCESS,
  payload: teacher,
});

export const fetchTeacherDetailsSuccess = (teacher) => ({
  type: FETCH_TEACHER_DETAILS_SUCCESS,
  payload: teacher,
});

export const postReviewSucsess = (review) => ({
  type: POST_REVIEW_SUCCESS,
  payload: review,
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

export const postReview = (rate, comment, id) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    dispatch(appLoading());
    try {
      const response = await axios.post(
        `${apiUrl}/teacher/${id}/review`,
        { rate, comment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(postReviewSucsess(response.data.review));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "Your review was created!"
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