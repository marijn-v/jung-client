import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";

import { fetchEvents } from "../../store/event/actions";
import { selectEvents } from "../../store/event/selectors";
import EventCard from "../../components/EventCard";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <Jumbotron>
      <div>
        {events.map((event) => {
          return <EventCard key={event.id} event={event} />; // pass down as props
        })}{" "}
      </div>
    </Jumbotron>
  );
}
