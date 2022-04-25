import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState(["craft", "raise"]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const formatGuess = () => {
    console.log("Formatting the guess - " + currentGuess);
  };
  const addNewGuess = () => {};
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log("You've used all your guesses");
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("You've already tried that word");
        return;
      }
      // check word is 5 characters long
      if (currentGuess.length !== 5) {
        console.log("Word must be 5 characters long");
        return;
      }
      formatGuess();
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };
  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};
export default useWordle;
