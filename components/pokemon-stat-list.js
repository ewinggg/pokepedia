/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import If from "./if"
import List from "./list"
import PokemonStatItem from "./pokemon-stat-item"
import { css } from "@emotion/react"

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const PokemonStatList = ({ pokemonStats }) => (
  <If condition={pokemonStats?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each stat from stats
        pokemonStats?.map(({ stat, base_stat }) => (
          <PokemonStatItem
            pokemonStat={{ ...stat, base_stat }}
            key={stat.name}
          />
        ))
      }
    </List>
  </If>
)

PokemonStatList.propTypes = {
  pokemonStats: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonStatList
