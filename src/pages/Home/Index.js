import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";

import { fetchEvents } from "../../store/event/actions";
import { selectEvents } from "../../store/event/selectors";
import EventCard from "../../components/EventCard";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  const sortedEvents = [...events].sort((a, b) => b.date - a.date);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {sortedEvents.map((event) => {
          return <EventCard key={event.id} event={event} />; // pass down as props
        })}{" "}
      </Box>
    </Box>
  );
}
