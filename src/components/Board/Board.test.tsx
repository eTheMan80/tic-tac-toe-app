import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Board from "./Board"

test("renders the board and handles click events", async () => {
  const squares = Array(9).fill(null)
  const onClickMock = jest.fn()
  render(<Board squares={squares} onClick={onClickMock} />)

  const buttons = screen.getAllByRole("button")
  expect(buttons).toHaveLength(9)

  await userEvent.click(buttons[0])
  expect(onClickMock).toHaveBeenCalledWith(0)
})
