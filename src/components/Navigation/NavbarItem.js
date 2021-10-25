import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";

export default function NavbarItem(props) {
  return (
    <Button
      component={NavLink}
      to={props.path}
      sx={{
        color: "#ff3d00",
        ":hover": { color: "#ff3d00", bgcolor: "transparent" },
        textDecoration: "none",
      }}
      disableripple
    >
      {props.linkText}
    </Button>
  );
}
