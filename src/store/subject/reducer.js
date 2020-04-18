import {
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECT_DETAILS_SUCCESS,
} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_SUCCESS:
      return action.payload;
    case FETCH_SUBJECT_DETAILS_SUCCESS: {
      
      return state.map((subject) => {
        if (subject.id === action.payload.id){
          return {...subject, ...action.payload}
        } else {
          return subject
        }
      })
    }

    default:
      return state;
  }
};
