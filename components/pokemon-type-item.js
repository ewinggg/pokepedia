/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Heading from "./heading"
import Grass from "./icons/types/grass"
import If from "./if"
import Item from "./item"
import usePokemonTypesColor from "../hooks/usePokemonTypesColor"
import { css } from "@emotion/react"

const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--bgColor);
`

const PokemonTypeItem = ({ pokemonType }) => {
  // Get type color
  const { typeColor } = usePokemonTypesColor(pokemonType.name)

  return (
    <If condition={typeof pokemonType === "object"}>
      <Item>
        <span
          css={iconStyle}
          style={{ "--bgColor": typeColor }}
          title={pokemonType.name}
        >
          <Grass size={1} />
        </span>
        <Heading level={3}>{pokemonType.name}</Heading>
      </Item>
    </If>
  )
}

PokemonTypeItem.propTypes = {
  pokemonType: PropTypes.object.isRequired,
}

export default PokemonTypeItem
