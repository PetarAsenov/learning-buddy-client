import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeacherDetails, fetchTeachers } from "../../store/teacher/actions";
import { fetchSessions } from "../../store/session/actions";
import Profile from "../../components/Profile";
import PostReview from "../../components/PostReview";
import { selectTeacherById } from "../../store/teacher/selectors";
import { selectUser } from "../../store/user/selectors";
import { Button } from "react-bootstrap";

export default function TeacherDetails() {
  const [showForm, setShowForm] = useState(false);

  const { token } = useSelector(selectUser);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTeacherDetails(id));
  }, [dispatch, id]);

  const teacherDetails = useSelector(selectTeacherById(id));

  return (
    <div>
      {!showForm && token &&(
        <Button onClick={() => setShowForm(!showForm)}>Make a review</Button>
      )}
      {showForm && (
        <PostReview hideForm={() => setShowForm(!showForm)} id={id} />
      )}
      {teacherDetails && <Profile profile={teacherDetails} />}
    </div>
  );
}
