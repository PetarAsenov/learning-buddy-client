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
import SessionsBySubject from "./pages/SessionsBySubject";
import ListSessions from "./pages/ListSessions";
import ListTeachers from "./components/ListTeachers";
import CreateSessionForm from "./pages/CreateSession";
import MyProfile from "./pages/Profile";
import TeacherDetails from "./pages/TeacherDetails";
import Homepage from "./pages/Homepage";
import Terms from "./pages/Terms";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(fetchSubjects());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/subjects/:id" component={SessionsBySubject} />
        <Route path="/teachers/:id" component={TeacherDetails} />
        <Route path="/sessions" component={ListSessions} />
        <Route path="/teachers" component={ListTeachers} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/new-session" component={CreateSessionForm} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/terms" component={Terms} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
