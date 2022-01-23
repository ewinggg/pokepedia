/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"
import { borderRadius, overlapStyle, thinBorderStyle } from "../styles/shared"

const buttonLabelStyle = css`
  ${borderRadius}
  font-size: 12px;
  font-weight: 700;
`

const buttonStyle = css`
  ${borderRadius}
  ${overlapStyle}
  ${thinBorderStyle}
  cursor: pointer;
  background-color: var(--dark-white);
  &:hover {
    color: var(--light-red);
  }
  width: 120px;
  height: 23px;
`

const PokemonDelete = ({ pokemon }) => {
  const { dispatch } = useAppContext()

  // Handle confirm to open dialog
  const handleConfirm = async (event, selectedPokemon) => {
    event.preventDefault()

    const { selectPokemon, toggleDialog } = await import("../state/actions")
    dispatch(selectPokemon(selectedPokemon))
    dispatch(toggleDialog())
  }

  return (
    <button
      data-testid="delete"
      css={buttonStyle}
      onClick={(event) => handleConfirm(event, pokemon)}
    >
      <span css={buttonLabelStyle}>Release</span>
    </button>
  )
}

PokemonDelete.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonDelete
