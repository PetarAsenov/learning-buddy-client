import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../store/subject/actions";
import { selectSubject } from "../../store/subject/selectors";
import Subject from "../Subject";

export default function ListSubjects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  const subjects = useSelector(selectSubject);

  return <Subject subjects={subjects} />;
}
