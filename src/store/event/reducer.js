import axios from "axios";
import { ADD_EVENT_SUCCESS } from "./actions";

const initialState = {
  loading: true,
  allEvents: [],
  allVenues: [],
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "event/fetch": {
      // payload => { events: [], venues: [] }
      const { events, venues } = action.payload;
      return {
        ...state,
        loading: false,
        allEvents: [...events],
        allVenues: [...venues],
      };
    }

    case ADD_EVENT_SUCCESS: {
      console.log("action feed", action.payload); // {...event+venue}

      return { ...state, allEvents: [...state.allEvents, action.payload] };
    }

    default: {
      return state;
    }
  }
}
