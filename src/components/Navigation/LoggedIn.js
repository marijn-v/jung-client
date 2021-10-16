import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import AddEvent from "./AddEvent";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      {user.isProfessional ? (
        <NavbarItem path="/venues" linkText="Venues" />
      ) : null}
      {user.isProfessional ? <AddEvent /> : null}
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.name}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
