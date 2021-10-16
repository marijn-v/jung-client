import React from "react";
import { useDispatch } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { attend } from "../../store/user/actions";

export default function EventCard(props) {
  const { event } = props;
  //   console.log("event prop", event);
  const dispatch = useDispatch();

  return (
    <Jumbotron>
      <div style={{ display: "block", maxWidth: "50%" }}>
        <img
          src={event.image}
          alt="poster event"
          style={{ width: "50%" }}
        ></img>
        <h4>{event.title}</h4>
        <p>{moment(event.date).format("ddd, MMM   Do, LT")}</p>
        <a href={event.link}>Link</a>
        <p>{event.description}</p>
        <Button onClick={() => dispatch(attend())}>Attend</Button>
      </div>
    </Jumbotron>
  );
}
