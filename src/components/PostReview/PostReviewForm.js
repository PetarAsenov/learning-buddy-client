import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { postReview } from "../../store/teacher/actions";


export default function PostReviewForm(props) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState('');

  function submitForm(event) {
    event.preventDefault();
    dispatch(postReview(rate, comment, props.id))
    props.hideForm()
  }

  
  return (
    <Form as={Col} md={{ span: 4, offset: 0 }}>
      <Form.Group>
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          type="text"
          placeholder="Leave your comment here"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Rate</Form.Label>
        <Form.Control
          type="number"
          value={rate}
          onChange={(event) => setRate(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Confirm!
        </Button>
      </Form.Group>
    </Form>
  );
}
