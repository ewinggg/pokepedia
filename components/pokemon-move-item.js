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
  display: inline-block;
`

const PokemonMoveItem = ({ pokemonMove }) => (
  <If condition={typeof pokemonMove === "object"}>
    <Item>
      <Card css={cardStyle} cssContent={cardContentStyle}>
        <Heading level={3}>{pokemonMove.name}</Heading>
      </Card>
    </Item>
  </If>
)

PokemonMoveItem.propTypes = {
  pokemonMove: PropTypes.object.isRequired,
}

export default PokemonMoveItem
