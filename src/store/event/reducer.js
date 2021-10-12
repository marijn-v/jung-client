const initialState = {
  loading: true,
  allEvents: [],
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "event/fetch": {
      //   console.log("action feed", action.payload);

      return {
        ...state,
        loading: false,
        allEvents: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
