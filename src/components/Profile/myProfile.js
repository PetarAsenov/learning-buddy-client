import React, { useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import EditProfile from "./EditProfile";
import PostReview from "../PostReview";

export default function ProfileData({ profile, teacher }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const showForm = () => setShowEditForm(!showEditForm);

  return (
    <Container
      style={{ margin: "20px auto" }}
      as={Col}
      md={{ span: 6, offset: 3 }}
    >
      {!showEditForm && (
        <Row>
          <Col>
            {!teacher && <h2>My Profile</h2>}
            <img
              width="130px"
              height="180px"
              src={
                profile.image_Url ||
                "https://sportgeneeskunderotterdam.nl/wp-content/uploads/2019/07/no-image-available.png"
              }
              alt={profile.name}
            />
            {!teacher && (
              <Button
                style={{ width: "130px", display: "block", marginTop: 3 }}
                onClick={showForm}
              >
                Edit
              </Button>
            )}
          </Col>
          <Col>
            <h1>{profile.name}</h1>
            <p>{profile.email}</p>
            <p>{profile.description}</p>
          </Col>
        </Row>
      )}
      {showEditForm && <EditProfile hideEditForm={showForm} />}
      {teacher && <PostReview id={profile.id} />}
    </Container>
  );
}
