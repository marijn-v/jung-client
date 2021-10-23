import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";

import { attend } from "../../store/user/actions";
import EmailForm from "../Email/EmailForm";
import { selectUser } from "../../store/user/selectors";

export default function EventCard(props) {
  const { event } = props;
  // console.log("event prop", event);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const userEventIds = user?.attending?.map((e) => e.id); // [1,2]

  // console.log(userEventIds, event.id);

  // user.attending => [{}, {}]

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "10px", bgcolor: "#eeeeee" }}>
        <CardContent>
          <Box
            sx={{
              width: 300,
              height: "auto",
              bgcolor: "primary.white",
              "&:hover": {
                backgroundColor: "grey",
                // opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={event.image}
              alt="poster event"
            />
            <Typography
              sx={{ fontSize: 24, color: "#ff3d00" }}
              color="text.secondary"
              gutterBottom
            >
              {event.title}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              {moment(event.date).format("ddd, MMM   Do, LT")}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {event.description}
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              <a style={{ color: "#ff3d00" }} href={event.link}>
                more info
              </a>
            </Typography>
            <DialogActions sx={{ marginTop: "20px" }}>
              {user.token &&
                (userEventIds && userEventIds.includes(event.id) ? (
                  <Typography
                    sx={{
                      marginRight: "10px",
                    }}
                    variant="button"
                    display="block"
                    gutterBottom
                  >
                    Attending
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      marginRight: "10px",
                      bgcolor: "#ff3d00",
                      ":hover": { bgcolor: "#ff3d00" },
                      borderRadius: 0,
                    }}
                    onClick={() => dispatch(attend(event.id))}
                  >
                    Attend
                  </Button>
                ))}
              {user.isProfessional && user.token && (
                <EmailForm eventId={event.id} />
              )}
            </DialogActions>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
