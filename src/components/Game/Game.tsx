import React, { useState } from "react"
import Button from "@mui/material/Button"
import Board from "../Board"
import { calculateWinner } from "../../util/helper"

const Game: React.FC = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [gameDraw, setGameDraw] = useState(false)

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1)
    const current = newHistory[newHistory.length - 1]
    const squares = current.slice()
    if (calculateWinner(squares) || squares[i]) {
      setGameDraw(true)
      return
    }
    squares[i] = xIsNext ? "X" : "O"
    setHistory(newHistory.concat([squares]))
    setStepNumber(newHistory.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current)

  const moves = history.map((_, move) => {
    const desc = move ? `Go to move #${move}` : "Go to game start"
    return (
      <li key={move}>
        <Button
          sx={{
            background: "#fff",
            border: "1px solid #999",
            fontSize: "14px",
            lineHeight: 1.5,
            width: "auto",
            padding: "5px",
            margin: "0 0 5px",
            textAlign: "center",
          }}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </Button>
      </li>
    )
  })

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (gameDraw) {
    status = `The game is a draw. Try again!`
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current} onClick={handleClick} />
      </div>
      <div className="game-info">
        <p>{status}</p>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
