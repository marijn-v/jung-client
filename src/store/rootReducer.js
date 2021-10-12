import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import event from "./event/reducer";

export default combineReducers({
  appState,
  user,
  event,
});
