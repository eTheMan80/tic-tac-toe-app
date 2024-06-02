import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Square from "./Square"

test("renders a square with a value and calls onClick when clicked", async () => {
  const onClickMock = jest.fn()
  render(<Square value="X" onClick={onClickMock} />)

  const buttonElement = screen.getByRole("button")
  expect(buttonElement).toHaveTextContent("X")

  await userEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalledTimes(1)
})
