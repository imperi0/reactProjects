import { useState } from "react";

export function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  const checkWinner = (b) => {
    for (let line of wins) {
      const [a, b2, c] = line;
      if (b[a] && b[a] === b[b2] && b[a] === b[c]) {
        return { player: b[a], line };
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const updated = [...board];
    updated[i] = turn;

    const result = checkWinner(updated);
    setBoard(updated);

    if (result) {
      setWinner(result);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  };

  return (
    <div className="tictactoe-container">
      <h1 className="tictactoe-title">Tic Tac Toe</h1>

      <h2 className="tictactoe-subtitle">
        {winner ? `Winner: ${winner.player}` : `Turn: ${turn}`}
      </h2>

      <div className="board">
        {board.map((val, i) => (
          <div
            key={i}
            className={`box ${winner?.line.includes(i) ? "win" : ""}`}
            onClick={() => handleClick(i)}
          >
            {val}
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}
