import PropTypes from "prop-types"
import If from "./if"
import PokemonCard from "./pokemon-card"
import styled from "@emotion/styled"

const StyledItem = styled.li``

const PokemonItem = ({ pokemon }) => (
  <If condition={typeof pokemon === "object"}>
    <StyledItem>
      <PokemonCard pokemon={pokemon} />
    </StyledItem>
  </If>
)

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonItem
