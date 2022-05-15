import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VotingCard from "./VotingCard";

import "./styles.css";

function AddCandidates() {
  const [candidate, setCandidate] = useState("");
  const [candidateList, setCandidateList] = useState([]);

  const valueListJson = JSON.stringify(candidateList);

  let [teams, setTeams] = useState([]);

  let [winners, setWinners] = useState([]);

  useEffect(() => {
    setWinners(valueListJson);
  }, []);

  /* Incrementation */

  function incrementVoteCount(teamId) {
    teams = candidateList.map((team) => {
      if (team.id === teamId) {
        team.votes = team.votes + 1;
      }
      return team;
    });
    setTeams(teams);
  }

  /* Trouver le gagnant */

  function GagnantVote() {
    return (
      <div>
        {
          (winners = candidateList
            .filter((gagnant) => (gagnant.votes = Math.max(gagnant.votes)))
            .map((winner) => <li>{winner.candidate}</li>))
        }
      </div>
    );
  }

  return (
    <div>
      <Container className="app">
        <Row>
          {candidateList.map((team) => {
            return (
              <Col md={4}>
                <VotingCard
                  team={team}
                  incrementVoteCount={(teamId) => incrementVoteCount(teamId)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      );
      <input
        type="text"
        value={candidate}
        placeholder="Ajouter un candidat"
        onChange={(e) => {
          setCandidate(e.target.value);
        }}
      />
      <input
        type="button"
        value="Add"
        onClick={(e) => {
          setCandidateList([
            ...candidateList,
            {
              // Use the current size as ID (needed to iterate the list later)
              id: candidateList.length + 1,
              candidate: candidate,
              votes: 0
            }
          ]);
          setCandidate(""); // Effacer la boite a dialogue
        }}
      />
      <ul>
        {candidateList.map((m) => (
          <li>
            <button key={m.id}>{m.candidate}</button>
          </li>
        ))}
      </ul>
      <p>{valueListJson}</p>;
      <div>
        <button type="text">Les gagnants sont: </button>
      </div>
      ;
      <div>
        <button>{GagnantVote()}</button>
      </div>
      ;
    </div>
  );
}
export default AddCandidates;
