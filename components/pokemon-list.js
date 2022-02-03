/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import If from "./if"
import List from "./list"
import PokemonItem from "./pokemon-item"
import { css } from "@emotion/react"
import media from "../styles/media"
import InfiniteScroll from "react-infinite-scroll-component"

const listStyle = css`
  ${media.sm} {
    justify-content: space-between;
  }
`

const PokemonList = ({ pokemons, handleLoadMore, totalPokemons }) => (
  <If condition={pokemons?.length > 0}>
    <InfiniteScroll
      dataLength={pokemons.length}
      next={handleLoadMore}
      hasMore={pokemons ? totalPokemons > pokemons.length : true}
      loader={
        <p css={{ gridColumn: "1 / span 2", textAlign: "center" }}>
          Loading pokemons...
        </p>
      }
      endMessage={
        <p css={{ gridColumn: "1 / span 2", textAlign: "center" }}>
          No more pokemons...
        </p>
      }
      scrollThreshold={0.7}
    >
      <List css={listStyle}>
        {
          // Iterate each pokemon from pokemons
          pokemons?.map((pokemon) => (
            <PokemonItem
              pokemon={pokemon}
              key={pokemon.nickname ?? pokemon.id}
            />
          ))
        }
      </List>
    </InfiniteScroll>
  </If>
)

PokemonList.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonList
