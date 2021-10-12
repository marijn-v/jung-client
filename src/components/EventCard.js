import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function EventCard(props) {
  const { event } = props;
  //   console.log("event prop", event);

  return (
    <Jumbotron>
      <div style={{ display: "block", maxWidth: "50%" }}>
        <img
          src={event.image}
          alt="poster event"
          style={{ width: "50%" }}
        ></img>
        <h4>{event.title}</h4>
        <p>{event.date}</p>
        <a href={event.link}>Link</a>
        <p>{event.description}</p>
      </div>
    </Jumbotron>
  );
}
