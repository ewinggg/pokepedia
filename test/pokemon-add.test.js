import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import PokemonAdd from "../components/pokemon-add"
import { AppProvider } from "../state/context"

describe("Pokemon Add", () => {
  const pokemon = {
    id: 4,
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
  }

  it("renders a dialog once add button is clicked", async () => {
    render(
      <AppProvider>
        <PokemonAdd pokemon={pokemon} />
      </AppProvider>
    )

    const button = screen.getByTestId("add")
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    await waitFor(() => {
      const dialog = screen.getByTestId("dialog")
      expect(dialog).toBeInTheDocument()
    })
  })
})
