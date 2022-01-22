/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Heading from "./heading"
import Dialog from "./dialog"
import { releasePokemon, selectPokemon, toggleDialog } from "../state/actions"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"
import {
  bigTextStyle,
  borderRadius,
  overlapStyle,
  thinBorderStyle,
} from "../styles/shared"

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
  &:hover {
    color: var(--light-blue);
  }
`

const headingStyle = css`
  ${bigTextStyle}
`

const PokemonDelete = ({ pokemon }) => {
  const { dialogOpen, selectedPokemon, dispatch } = useAppContext()

  const handleRelease = (event) => {
    event.preventDefault()

    dispatch(releasePokemon(selectedPokemon))
    dispatch(toggleDialog())
  }

  // Handle confirm to open dialog
  const handleConfirm = (event, emon) => {
    event.preventDefault()

    dispatch(selectPokemon(emon))
    dispatch(toggleDialog())
  }

  // Handle close dialog
  const handleClose = (event) => {
    event.preventDefault()

    dispatch(toggleDialog())
  }

  return (
    <>
      <button
        css={buttonStyle}
        onClick={(event) => handleConfirm(event, pokemon)}
      >
        <span css={buttonLabelStyle}>Release</span>
      </button>
      <Dialog
        open={dialogOpen}
        onCancel={handleClose}
        cancelText="Keep"
        onConfirm={handleRelease}
        confirmText="Release"
      >
        <Heading level={2} css={headingStyle}>
          Are you sure to release this Pokémon?
        </Heading>
      </Dialog>
    </>
  )
}

PokemonDelete.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonDelete