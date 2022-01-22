/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import If from "./if"
import List from "./list"
import PokemonItem from "./pokemon-item"
import { css } from "@emotion/react"
import media from "../styles/media"

const listStyle = css`
  ${media.sm} {
    justify-content: space-between;
  }
`

const PokemonList = ({ pokemons }) => (
  <If condition={pokemons?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each pokemon from pokemons
        pokemons?.map((pokemon) => (
          <PokemonItem pokemon={pokemon} key={pokemon.id} />
        ))
      }
    </List>
  </If>
)

PokemonList.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonList
