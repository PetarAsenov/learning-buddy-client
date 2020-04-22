import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);
  const {role} = useSelector(selectUser);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const showNewSession = role === 'teacher' 


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Learning Buddy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem exact path="/" linkText="Home" />
          <NavbarItem path="/sessions" linkText="See all sessions" />
          <NavbarItem path="/teachers" linkText="See all teachers" />
          {showNewSession && <NavbarItem path="/new-session" linkText="Create a session" />}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
