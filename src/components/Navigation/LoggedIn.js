import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  let userLink = user.name && user.name.split(' ')[0]
  userLink = userLink && userLink[userLink.length - 1] === 's' ? userLink + `' profile` : userLink + `'s profile`
  
  
  return (
    <>
      <NavbarItem path="/profile" linkText={userLink} />
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
