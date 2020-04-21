import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Session from "../Session";
import EditProfile from "./EditProfile";
import Button from "react-bootstrap/Button";

export default function Profile({ profile, showDetails }) {
  const isTeacher = profile.role === "teacher";
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <Jumbotron>
    <h1>{profile.name}</h1>
      {
        !showEditForm && 
        <div>
          <img
            width="130px"
            height="180px"
            src={
              profile.image_Url ||
              "https://sportgeneeskunderotterdam.nl/wp-content/uploads/2019/07/no-image-available.png"
            }
            alt={profile.name}
          />
          <p>{profile.description}</p>
          <Button onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>
        </div>
      }

      {showEditForm && (
        <EditProfile hideEditForm={() => setShowEditForm(!showEditForm)} />
      )}
      {isTeacher &&
        showDetails &&
        profile.mySessions &&
        profile.mySessions.map((session) => (
          <Session key={session.id} session={session} show={false} />
        ))}
      {showDetails &&
        profile.sessions &&
        profile.sessions.map((session) => (
          <Session key={session.id} session={session} show={false} />
        ))}
      {isTeacher &&
        showDetails &&
        profile.receivedReviews &&
        profile.receivedReviews.map((review) => (
          // <Review key={review.id} session={review} />
          <div key={review.id}>
            <p>{review.rate}</p>
            <p>{review.comment}</p>
          </div>
        ))}
    </Jumbotron>
  );
}
