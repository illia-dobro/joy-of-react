import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer, endGame }) {
  const [word, setWord] = React.useState([]);
  

  const checkArr = checkGuess(guess, answer.answer);

  const splitArr = checkArr ? checkArr : Array(5).fill("");

  
  // if(checkArr){
  //   const copy = [...checkArr]
  //   setWord(copy);
  // }
  

  return (
    <>
      {splitArr.map((i) => (
        <span key={Math.random()} class={`cell ${i.status} `}>
          {i.letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
