import { render, screen } from "@testing-library/react"
import Card from "../components/card"

describe("Card", () => {
  it("renders a Card component", () => {
    render(<Card />)

    const card = screen.getByTestId("card")

    expect(card).toBeInTheDocument()
  })
})
