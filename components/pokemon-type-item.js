/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import If from "./if"
import Item from "./item"
import usePokemonTypesColor from "../hooks/usePokemonTypesColor"
import { css } from "@emotion/react"
import {
  bigTextStyle,
  borderRadius,
  buttonStyle,
  thickBorderStyle,
} from "../styles/shared"

const iconStyle = css`
  ${borderRadius}
  width: 100%;
  background-color: var(--bgColor);
  padding: 8px;
  cursor: pointer;
  transition: all 0.25s;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  &:active {
    box-shadow: none;
  }
`

const itemStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
`

const PokemonTypeItem = ({ pokemonType }) => {
  // Get type color
  const typeColor = usePokemonTypesColor(pokemonType.name)

  return (
    <If condition={typeof pokemonType === "object"}>
      <Item css={itemStyle}>
        <span
          css={iconStyle}
          style={{ "--bgColor": typeColor }}
          title={pokemonType.name}
        >
          {pokemonType.name}
        </span>
      </Item>
    </If>
  )
}

PokemonTypeItem.propTypes = {
  pokemonType: PropTypes.object.isRequired,
}

export default PokemonTypeItem
