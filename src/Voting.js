import React, { useState, useCallback } from "react";
import { AddCandidates } from "./AddCandidates";

let voteCount = 0;

function Voting() {
  const [valueVote, setValueVote] = useState(0);
  const onButtonClick = useCallback(
    () => setValueVote((valueVote) => valueVote),
    []
  );
  voteCount += 1;
  return (
    <div>
      state {valueVote}
      <br />
      nombre de votes {voteCount - 1}
      <br />
      <button onClick={onButtonClick}>vote</button>
    </div>
  );
}

export default Voting;
