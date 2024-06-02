import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const titleElement = screen.getByText(/Tic Tac Toe/i)
  const paragraphElement = screen.getByText(
    /Click on the squares to play the game/i,
  )
  expect(titleElement).toBeInTheDocument()
  expect(paragraphElement).toBeInTheDocument()
})
