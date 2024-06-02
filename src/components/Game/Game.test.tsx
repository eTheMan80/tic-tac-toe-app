import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Game from "./Game"

test("renders the game and allows playing moves", async () => {
  render(<Game />)

  const statusElement = screen.getByText(/Next player: X/i)
  expect(statusElement).toBeInTheDocument()

  const buttons = screen.getAllByRole("button")
  await userEvent.click(buttons[0])
  expect(buttons[0]).toHaveTextContent("X")
})
