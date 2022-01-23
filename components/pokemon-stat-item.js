import PropTypes from "prop-types"
import Heading from "./heading"
import If from "./if"
import Item from "./item"
import { css } from "@emotion/react"

const barStyle = css`
  width: 100%;
`

const headingStyle = css`
  justify-content: space-between;
`

const itemStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

const PokemonStatItem = ({ pokemonStat }) => (
  <If condition={typeof pokemonStat === "object"}>
    <Item css={itemStyle}>
      <Heading level={3} css={headingStyle}>
        <span>{pokemonStat.name}</span>
        <span>{pokemonStat.base_stat}</span>
      </Heading>
      <progress value={pokemonStat.base_stat ?? 0} max={100} css={barStyle} />
    </Item>
  </If>
)

PokemonStatItem.propTypes = {
  pokemonStat: PropTypes.object.isRequired,
}

export default PokemonStatItem
