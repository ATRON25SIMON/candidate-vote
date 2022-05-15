import React from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  let { team, incrementVoteCount } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{team.candidate}</Card.Title>
        <Button variant="success" onClick={() => incrementVoteCount(team.id)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {team.votes}</Card.Footer>
    </Card>
  );
}
export default VotingCard;
