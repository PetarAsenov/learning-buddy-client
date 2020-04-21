import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { editUserProfile } from "../../store/user/actions";

export default function EditProfile(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const [description, setDescription] = useState(user.description || '');
  const [image_Url, setImage_Url] = useState(user.image_Url || '');

  function submitForm(event) {
    event.preventDefault();
    dispatch(editUserProfile(image_Url, description))
    props.hideEditForm()
  }

  
  return (
    <Form as={Col} md={{ span: 4, offset: 0 }}>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Describe yourself"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          type="text"
          value={image_Url}
          onChange={(event) => setImage_Url(event.target.value)}
          placeholder="put here your best photo"
        />
        {image_Url ? (
          <Col className="mt-4" md={{ span: 4, offset: 0 }}>
            <Image src={image_Url} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Confirm changes!
        </Button>
      </Form.Group>
    </Form>
  );
}
