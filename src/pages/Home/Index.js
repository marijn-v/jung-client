import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import moment from "moment";

import { fetchEventsAndVenues } from "../../store/event/actions";
import { selectEvents } from "../../store/event/selectors";
import EventCard from "../../components/EventCard/EventCard";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  const sortedEvents = [...events].sort((a, b) => {
    // console.log("sort", moment(b.date), moment(a.date));
    return moment(a.date) - moment(b.date);
  });
  useEffect(() => {
    dispatch(fetchEventsAndVenues());
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexShrink: 0, minHeight: "100vh" }}>
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          display: "flex",
          alignSelf: "flex-end",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        {sortedEvents.map((event) => {
          return <EventCard key={event.id} event={event} />; // pass down as props
        })}{" "}
      </Box>
    </Box>
  );
}
