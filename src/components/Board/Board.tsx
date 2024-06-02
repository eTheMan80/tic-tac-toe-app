import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Square from "../Square"
import { boardSquares } from "../../util/array"

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = () => {
    return (
      <>
        {boardSquares.map((item) => (
          <Square
            key={item}
            value={squares[item]}
            onClick={() => onClick(item)}
          />
        ))}
      </>
    )
  }

  return (
    <Grid container sx={{ width: "195px" }}>
      {renderSquare()}
    </Grid>
  )
}

export default Board
