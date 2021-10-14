import axios from "axios";
import { apiUrl } from "../../config/constants";

// fetch all events, including venues
export const eventsFetched = (listOfEvents) => ({
  type: "event/fetch",
  payload: listOfEvents, // [{}, {}]
});

export function fetchEvents() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}/events`); // http://localhost:4000/events
      //   console.log("response fetch events", response.data); // [{}, {}]
      dispatch(eventsFetched(response.data)); // dispatch to backend via thunk/url
    } catch (e) {
      console.log(e.message);
    }
  };
}
