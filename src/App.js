import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Subject from "./components/Subject";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { selectSubject } from "./store/subject/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { fetchSubjects } from "./store/subject/actions";
import { Jumbotron } from "react-bootstrap";
import SessionsBySubject from "./pages/SessionsBySubject";
import ListSessions from "./pages/ListSessions";

const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const subjects = useSelector(selectSubject);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
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
        <Route exact path="/" >
          {subjects && <div className="box">
            
          {subjects.map((subject) => (
            <Subject key={subject.id} subject={subject} />
          ))}</div>}
        </Route>
        <Route path="/subjects/:id" component={SessionsBySubject} />
        <Route path="/sessions" component={ListSessions} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
