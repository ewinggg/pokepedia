/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Card from "./card"
import Heading from "./heading"
import If from "./if"
import Item from "./item"
import { css } from "@emotion/react"

const itemStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const statStyle = css`
  justify-content: space-between;
`

const cardStyle = css`
  transform: skew(-15deg);
  padding: 5px 8px;
  border: 2px solid var(--dark-black);
`

const cardContentStyle = css`
  display: inline-block;
  transform: skew(15deg);
`

const PokemonMoveItem = ({ pokemonMove }) => (
  <If condition={typeof pokemonMove === "object"}>
    <Item css={itemStyle}>
      <Card css={cardStyle} cssContent={cardContentStyle}>
        <Heading level={3} css={statStyle}>
          {pokemonMove.name}
        </Heading>
      </Card>
    </Item>
  </If>
)

PokemonMoveItem.propTypes = {
  pokemonMove: PropTypes.object.isRequired,
}

export default PokemonMoveItem
