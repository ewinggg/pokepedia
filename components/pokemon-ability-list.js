import PropTypes from "prop-types"
import If from "./if"
import List from "./list"
import PokemonAbilityItem from "./pokemon-ability-item"
import { css } from "@emotion/react"

const listStyle = css`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`

const PokemonAbilityList = ({ pokemonAbilities }) => (
  <If condition={pokemonAbilities?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each ability from abilities
        pokemonAbilities?.map(({ ability }) => (
          <PokemonAbilityItem pokemonAbility={ability} key={ability.name} />
        ))
      }
    </List>
  </If>
)

PokemonAbilityList.propTypes = {
  pokemonAbilities: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonAbilityList
