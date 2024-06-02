import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Game from "./components/Game"
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <Box sx={{ width: "100%", textAlign: "center", margin: "36px 0 0" }}>
        <Typography variant="h2" component="h1">
          Tic Tac Toe
        </Typography>
      </Box>
      <Box sx={{ width: "100%", textAlign: "center", margin: "36px 0" }}>
        <Typography variant="h5" component="p">
          Click on the squares to play the game!
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Game />
      </Box>
    </div>
  )
}

export default App
