import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import subject from "./subject/reducer";

export default combineReducers({
  appState,
  user,
  subject
});
