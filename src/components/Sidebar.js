import React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import moment from "moment";

import { selectEvents } from "../store/event/selectors";

export default function PinnedSubheaderList() {
  const events = useSelector(selectEvents);

  const sortedEvents = [...events].sort((a, b) => {
    // console.log("sort", moment(b.date), moment(a.date));
    return moment(a.date) - moment(b.date);
  });

  return (
    <List
      sx={{
        width: "90%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "auto",
        borderRight: 1,
        "& ul": { padding: 0 },
        color: "#ff3d00",
        backgroundColor: "#eeeeee",
      }}
      subheader={<li />}
    >
      {sortedEvents.map((event) => (
        <li>
          <ul>
            <ListSubheader sx={{ backgroundColor: "#eeeeee" }}>
              {moment(event.date).format("ddd, MMM   Do")}
            </ListSubheader>

            <ListItem key={event.id}>
              <a style={{ color: "#ff3d00" }} href={event.link}>
                {event.title}
              </a>
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
}
