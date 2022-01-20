import PropTypes from "prop-types"
import If from "./if"
import PokemonItem from "./pokemon-item"
import styled from "@emotion/styled"

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
`

const PokemonList = ({ pokemons }) => (
  <If condition={pokemons?.length > 0}>
    <StyledList>
      {
        // Iterate each pokemon from pokemons
        pokemons?.map((pokemon) => (
          <PokemonItem pokemon={pokemon} key={pokemon.id} />
        ))
      }
    </StyledList>
  </If>
)

PokemonList.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonList
