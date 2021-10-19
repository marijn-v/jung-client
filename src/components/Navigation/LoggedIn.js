import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

import { selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import AddEvent from "./AddEvent";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      {/* {user.isProfessional ? (
        <NavbarItem path="/venues" linkText="Venues" />
      ) : null} */}
      {user.isProfessional ? (
        <Typography
          variant="button"
          display="block"
          gutterBottom
          underline="none"
          sx={{ padding: ".5rem 1rem", color: "#ff3d00" }}
          as={NavLink}
          to="/venues"
        >
          venues
        </Typography>
      ) : null}

      {user.isProfessional ? <AddEvent /> : null}
      <Typography sx={{ padding: ".5rem 1rem", color: "#ff3d00" }}>
        {user.name}
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#ff3d00",
          ":hover": { bgcolor: "#ff3d00" },
          borderRadius: 0,
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
}
