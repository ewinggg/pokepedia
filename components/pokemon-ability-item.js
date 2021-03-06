/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Card from "./card"
import Heading from "./heading"
import If from "./if"
import Item from "./item"
import { css } from "@emotion/react"
import { borderRadius, thinBorderStyle } from "../styles/shared"

const cardStyle = css`
  ${borderRadius}
  ${thinBorderStyle}
padding: 3px 5px;
`

const cardContentStyle = css`
  ${borderRadius}
`

const PokemonAbilityItem = ({ pokemonAbility }) => (
  <If condition={typeof pokemonAbility === "object"}>
    <Item>
      <Card css={cardStyle} cssContent={cardContentStyle}>
        <Heading data-testid="heading" level={3}>
          {pokemonAbility.name}
        </Heading>
      </Card>
    </Item>
  </If>
)

PokemonAbilityItem.propTypes = {
  pokemonAbility: PropTypes.object.isRequired,
}

export default PokemonAbilityItem
