import { useState } from "react";
import styles from "../styles/TicTacToe.module.css";


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `🎉 Winner: ${winner}`
    : squares.every(Boolean)
    ? "It's a draw! 🤝"
    : `Next player: ${isXNext ? "X" : "O"}`;

    return (
        <div className={styles.container}>
          <h1>Tic Tac Toe</h1>
          <div className={styles.status}>{status}</div>
          <div className={styles.board}>
            {squares.map((value, index) => (
              <button
                key={index}
                className={`${styles.square} ${
                  value || winner ? styles.disabled : ""
                }`}
                onClick={() => handleClick(index)}
                disabled={Boolean(value) || Boolean(winner)}
              >
                {value}
              </button>
            ))}
          </div>
          <button className={styles.restart} onClick={restartGame}>
            Restart Game
          </button>
        </div>
      );
      
}
