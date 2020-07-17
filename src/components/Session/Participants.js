import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Participants({ session, bg }) {
  const [showParticipants, setShowParticipants] = useState(false);

  const showBtn = session.participants.length > 0;

  return (
    <div>
      {showParticipants &&
        session.participants.map((participant) => (
          <Card key={participant.id} bg={bg}
          text={bg === "light" ? "dark" : "white"}>
            <Card.Text>name: {participant.participant.name}</Card.Text>
            <Card.Text>email: {participant.participant.email}</Card.Text>
          </Card>
        ))}
      {showBtn && (
        <Button onClick={() => setShowParticipants(!showParticipants)}>
          {showParticipants ? "hide participants" : "see participants"}
        </Button>
      )}
    </div>
  );
}