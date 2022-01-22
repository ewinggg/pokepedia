/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import If from "./if"
import List from "./list"
import PokemonMoveItem from "./pokemon-move-item"
import { css } from "@emotion/react"

const listStyle = css`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  max-height: 412px;
  overflow-y: scroll;
  padding: 5px;
`

const PokemonMoveList = ({ pokemonMoves }) => (
  <If condition={pokemonMoves?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each ability from abilities
        pokemonMoves?.map(({ move }) => (
          <PokemonMoveItem pokemonMove={move} key={move.name} />
        ))
      }
    </List>
  </If>
)

PokemonMoveList.propTypes = {
  pokemonMoves: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonMoveList
