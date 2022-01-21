import PropTypes from "prop-types"
import If from "./if"
import Item from "./item"
import PokemonCard from "./pokemon-card"

const PokemonItem = ({ pokemon }) => (
  <If condition={typeof pokemon === "object"}>
    <Item>
      <PokemonCard pokemon={pokemon} />
    </Item>
  </If>
)

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonItem
