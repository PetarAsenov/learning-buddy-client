import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import subject from "./subject/reducer";
import session from "./session/reducer";

export default combineReducers({
  appState,
  user,
  subject,
  session
});
