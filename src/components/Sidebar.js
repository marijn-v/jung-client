import React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import moment from "moment";

import { selectEvents } from "../store/event/selectors";

export default function PinnedSubheaderList() {
  const events = useSelector(selectEvents);

  const sortedEvents = [...events].sort((a, b) => b.date - a.date);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "auto",
        borderRight: 1,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {sortedEvents.map((event) => (
        <li>
          <ul>
            <ListSubheader>
              {moment(event.date).format("ddd, MMM   Do")}
            </ListSubheader>

            <ListItem key={event.id}>
              <a href={event.link}>{event.title}</a>
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
}
