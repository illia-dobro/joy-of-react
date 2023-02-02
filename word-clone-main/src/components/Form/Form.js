import React from "react";

function Form({ value, setValue, endGame, gameStatus }) {
  const [input, setInput] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length === 5) {
      const copy = [...value, input];
      setValue(copy);
      endGame(input);
      setInput("");
      
    }
  }
  return (
    <form onSubmit={handleSubmit} class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();          
          setInput(nextGuess);
        }}
      />
    </form>
  );
}

export default Form;
