import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import { sendEmail } from "../../store/event/actions";
// import { selectEvents } from "../../store/event/selectors";

export default function EmailForm(props) {
  const dispatch = useDispatch();
  // const events = useSelector(selectEvents);

  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  function sendMessage(event) {
    event.preventDefault();

    console.log("new email", {
      message,
    });

    dispatch(sendEmail(message, props.eventId));
    handleClose();
  }

  // console.log("my events", events);
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          bgcolor: "#ff3d00",
          ":hover": { bgcolor: "#ff3d00" },
        }}
        onClick={handleClickOpen}
      >
        send message
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send a message to your audience</DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <TextField
              autoFocus
              margin="dense"
              id="outlined-multiline-static"
              label="Message"
              type="text"
              multiline
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              fullWidth
              variant="standard"
              required
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendMessage}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
