import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserProfile } from "./store/user/actions";
import { fetchSubjects } from "./store/subject/actions";
import { Jumbotron } from "react-bootstrap";
import SessionsBySubject from "./pages/SessionsBySubject";
import ListSessions from "./pages/ListSessions";
import CreateSessionForm from "./pages/CreateSession";
import MyProfile from "./pages/Profile";
import ListSubjects from "./pages/Subjects";
import ListTeachers from "./pages/ListTeachers";


const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={ListSubjects} />
        <Route path="/subjects/:id" component={SessionsBySubject} />
        <Route path="/sessions" component={ListSessions} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/new-session" component={CreateSessionForm} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/subjects" component={ListSubjects} />
        <Route path="/teachers" component={ListTeachers} />
      </Switch>
    </div>
  );
}

export default App;
