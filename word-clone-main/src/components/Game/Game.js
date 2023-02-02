import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Guesses from "../Guesses/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [value, setValue] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  function endGame(valueFromInput) {
    if (valueFromInput.toUpperCase() === answer) {
      setGameStatus("won");
    }
    if (value.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lost");
    }
    console.log(value.length, gameStatus);
  }

  return (
    <>
      {gameStatus === "won" && <WonBanner />}
      {gameStatus === "lost" && <LostBanner />}
      <Guesses guesses={value} answer={{ answer }} />
      <Form
        value={value}
        setValue={setValue}
        endGame={endGame}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
