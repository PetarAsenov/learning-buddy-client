import {
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHER_DETAILS_SUCCESS,
} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEACHERS_SUCCESS:
      return action.payload;
    case FETCH_TEACHER_DETAILS_SUCCESS: {
      return state.map((teacher) => {
        if (teacher.id === action.payload.id) {
          return { ...teacher, ...action.payload };
        } else {
          return teacher;
        }
      });
    }
   
    default:
      return state;
  }
};
