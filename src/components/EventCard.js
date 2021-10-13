import React from "react";
import { Jumbotron } from "react-bootstrap";
import moment from "moment";

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
        <p>{moment(event.date).format("ddd, MMM   Do")}</p>
        <a href={event.link}>Link</a>
        <p>{event.description}</p>
      </div>
    </Jumbotron>
  );
}
