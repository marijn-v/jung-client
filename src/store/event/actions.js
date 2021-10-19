import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";

const addEventSuccess = (postEvent) => ({
  type: ADD_EVENT_SUCCESS,
  payload: postEvent,
});

// add event
export const addEvent = (title, image, date, description, link, venueId) => {
  return async (dispatch, getState) => {
    // space and token are inside User
    const reduxstate = getState();
    const token = reduxstate.user.token;
    const userId = reduxstate.user.id;

    // dispatch(appLoading());

    console.log("user id", userId);
    console.log("token post story", token);
    console.log(
      "title, image, date, description, link, venueId",
      title,
      image,
      date,
      description,
      link,
      venueId
    );

    try {
      const response = await axios.post(
        `${apiUrl}/events/${userId}/add`,
        {
          title,
          image,
          date,
          description,
          link,
          venueId,
          userId: userId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("response", response.data);
      // dispatch(response.data);

      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Event added successfully",
          3000
        )
      );
      // Once we know the event is on the Database
      // We try to add it to redux
      dispatch(addEventSuccess(response.data));
      // dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

// fetch all events, including venues
export const dataFetched = (eventsAndVenues) => ({
  type: "event/fetch",
  payload: eventsAndVenues, // { events: [{}, {}], venues: [{}, {}] }
});

export function fetchEventsAndVenues() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}/events`); // http://localhost:4000/events
      const venueResponse = await axios.get(`${apiUrl}/events/venues`);
      //   console.log("response fetch events", response.data); // [{}, {}]
      dispatch(
        dataFetched({ events: response.data, venues: venueResponse.data })
      ); // dispatch to backend via thunk/url
    } catch (e) {
      console.log(e.message);
    }
  };
}

// send email
export const newEmail = (email) => ({
  type: "even/sendEmail",
  payload: email,
});

export function sendEmail(message, eventId) {
  return async (dispatch, getState) => {
    const reduxstate = getState();
    const token = reduxstate.user.token;
    const userId = reduxstate.user.id;

    console.log("user id", userId);
    console.log("token post story", token);
    console.log("message, eventId", message, eventId);
    try {
      const response = await axios.post(
        `${apiUrl}/email/send`,
        {
          message,
          eventId,
          userId: userId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(newEmail(response.data));
      console.log("response email", response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
}
