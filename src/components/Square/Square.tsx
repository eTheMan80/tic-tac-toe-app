import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Button from "@mui/material/Button"

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <Grid xs={4}>
      <Button
        sx={{
          background: "#fff",
          border: "1px solid #999",
          fontSize: "24px",
          lineHeight: "34px",
          width: "34px",
          height: "34px",
          padding: 0,
          textAlign: "center",
        }}
        onClick={onClick}
      >
        {value}
      </Button>
    </Grid>
  )
}

export default Square
