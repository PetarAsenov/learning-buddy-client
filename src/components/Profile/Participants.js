import React, { useState } from "react";
import { Button } from "react-bootstrap";


export default function Participants({session}) {
  const [showParticipants, setShowParticipants] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowParticipants(!showParticipants)}>
        {showParticipants ? "hide participants" : "see participants"}
      </Button>

      {showParticipants &&
        session.participants.map((participant) => (
          <div>
            <p>name: {participant.participant.name}</p>
            <p>email: {participant.participant.email}</p>
          </div>
        ))}
    </div>
  );
}
