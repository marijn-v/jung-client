import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterMoment from "@mui/lab/AdapterMoment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import { addEvent } from "../../store/user/actions";
import { selectEvents } from "../../store/event/selectors";

export default function AddEvent() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [venueId, setVenueId] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // console.log("new event", {
  //   title,
  //   image,
  //   date,
  //   description,
  //   link,
  //   venueId,
  // });

  const handleClose = (event) => {
    setOpen(false);
  };

  function submitEvent(event) {
    event.preventDefault();

    console.log("new event", {
      title,
      image,
      date,
      description,
      link,
      venueId,
    });

    dispatch(addEvent(title, image, date, description, link, venueId));
    handleClose();
  }

  if (!events.length > 0) return <div>Loading...</div>;

  console.log("my events", events);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        add event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add your event</DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="image"
              label="image url"
              type="url"
              onChange={(event) => setImage(event.target.value)}
              fullWidth
              variant="standard"
              required
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                // autoFocus
                // margin="dense"
                // id="date+time picker"
                label="date / time"
                value={date}
                onChange={(value) => {
                  console.log("the event", value);
                  setDate(value);
                }}
                renderInput={(params) => <TextField {...params} />}
                // fullWidth
                // variant="standard"
              />
            </LocalizationProvider>

            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="description (max. 100 words)"
              type="url"
              onChange={(event) => setDescription(event.target.value)}
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="link"
              label="link to your event"
              type="url"
              onChange={(event) => setLink(event.target.value)}
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="venue"
              select
              label="select venue"
              value={venueId}
              onChange={(event) => {
                console.log("the event value", event.target.value);
                setVenueId(event.target.value);
              }}
              fullWidth
              variant="standard"
            >
              {events[0] &&
                events.map((event) => {
                  const { venue } = event;
                  // console.log("the venue item", event);
                  return (
                    <MenuItem key={venue.id} value={venue.id}>
                      {venue.name}{" "}
                    </MenuItem>
                  );
                })}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitEvent}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
