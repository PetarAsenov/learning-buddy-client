import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeacherDetails, fetchTeachers } from "../../store/teacher/actions";
import { fetchSessions } from "../../store/session/actions";
import Profile from "../../components/Profile";
import { selectTeacherById } from "../../store/teacher/selectors";

export default function TeacherDetails() {

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
      {teacherDetails && <Profile profile={teacherDetails} teacher/>}
    </div>
  );
}
