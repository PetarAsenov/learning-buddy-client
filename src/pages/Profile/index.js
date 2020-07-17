import React, { useEffect } from "react";
import Profile from "../../components/Profile";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../store/user/actions";
import { fetchSessions } from "../../store/session/actions";

export default function MyProfile() {
  const { token } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const history = useHistory();

  if (token === null) {
    history.push("/");
  }
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);
  return <div>{user && <Profile profile={user} participants />}</div>;
}
