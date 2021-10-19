import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { selectToken } from "../../store/user/selectors";
// import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#eeeeee",
          border: 2,
          borderBottomColor: "#ff3d00",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#ff3d00" }}
            as={NavLink}
            to="/"
          >
            jung
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Box
            color="inherit"
            sx={{ display: "flex", alignContent: "flex-end" }}
          >
            {loginLogoutControls}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar
    //     position="static"
    //     sx={{ bgcolor: "white" }}
    //     // style={{ marginRight: "10px", marginLeft: "10px" }}
    //   >
    //     <Toolbar>
    //       {/* <Navbar.Brand as={NavLink} to="/">
    //         JUNG
    //       </Navbar.Brand> */}
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ display: { xs: "none", sm: "block" } }}
    //         as={NavLink}
    //         to="/"
    //       ></Typography>
    //       {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav style={{ width: "100%" }} fill>
    //           {loginLogoutControls}
    //         </Nav>
    //       </Navbar.Collapse> */}
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}
