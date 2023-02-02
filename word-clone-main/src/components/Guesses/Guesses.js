import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({ guesses, answer}) {
  
  
  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i, index) => {
        
        return (
          <p key={Math.random()} class="guess">
            <Guess 
            guess = {guesses[i]}
            answer = {answer}            
            />
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;
