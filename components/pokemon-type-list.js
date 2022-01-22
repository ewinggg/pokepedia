/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import If from "./if"
import List from "./list"
import PokemonTypeItem from "./pokemon-type-item"
import { css } from "@emotion/react"

export const listStyle = css`
  gap: 5px;
`

const PokemonTypeList = ({ pokemonTypes }) => (
  <If condition={pokemonTypes?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each type from types
        pokemonTypes?.map(({ type }) => (
          <PokemonTypeItem pokemonType={type} key={type.name} />
        ))
      }
    </List>
  </If>
)

PokemonTypeList.propTypes = {
  pokemonTypes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonTypeList
