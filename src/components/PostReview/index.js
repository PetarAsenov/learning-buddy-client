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

  return (
    <div>
      {!showForm && token && (
        <Button onClick={() => setShowForm(!showForm)}>Make a review</Button>
      )}
      {showForm && (
        <PostReviewForm hideForm={() => setShowForm(!showForm)} id={id} />
      )}
    </div>
  );
}
