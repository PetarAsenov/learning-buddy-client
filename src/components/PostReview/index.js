import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { Button } from "react-bootstrap";
import PostReviewForm from './PostReviewForm'
import { useParams } from "react-router-dom";

export default function PostReview() {
  const [showForm, setShowForm] = useState(false);

  const { token } = useSelector(selectUser);
  const {id} = useParams()
  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      {!showForm && token && (
        <Button style={{ width: "130px", display: "block", marginTop: 3 }} onClick={showFormHandler}>Make a review</Button>
      )}
      {showForm && (
        <PostReviewForm hideForm={showFormHandler} id={id} />
      )}
    </div>
  );
}
