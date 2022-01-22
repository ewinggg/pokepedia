/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Heading from "./heading"
import Dialog from "./dialog"
import { releasePokemon, selectPokemon, toggleDialog } from "../state/actions"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"
import {
  borderRadius,
  boxShadowStyle,
  buttonTextStyle,
  flexCenterStyle,
  headingTextStyle,
  overlapStyle,
  textShadowStyle,
  thinBorderStyle,
} from "../styles/shared"

const buttonLabelStyle = css`
  ${buttonTextStyle}
  ${flexCenterStyle}
  ${borderRadius}
  ${textShadowStyle}
  margin: 6px -10px 5px 20px;
`

const buttonsStyles = css`
  display: flex;
  gap: 30px;
`

const buttonStyle = css`
  ${boxShadowStyle}
  ${borderRadius}
  ${thinBorderStyle}
  background-color: var(--dark-white);
  padding: 0;
  width: 100%;
  cursor: pointer;
  transition: all 0.25s;
  &:active {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`

const headingStyle = css`
  ${headingTextStyle}
`

const overlapButtonLabelStyle = css`
  ${borderRadius}
  font-size: 12px;
  font-weight: 700;
`

const overlapButtonStyle = css`
  ${borderRadius}
  ${overlapStyle}
  ${thinBorderStyle}
  cursor: pointer;
  &:hover {
    color: var(--light-blue);
  }
`

const PokemonDelete = ({ pokemon }) => {
  const { state, dispatch } = useAppContext()
  const { dialogOpen, selectedPokemon } = state

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
        css={overlapButtonStyle}
        onClick={(event) => handleConfirm(event, pokemon)}
      >
        <span css={overlapButtonLabelStyle}>Release</span>
      </button>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <Heading level={2} css={headingStyle}>
          Are you sure to release this Pokémon?
        </Heading>
        <section css={buttonsStyles}>
          <button css={buttonStyle}>
            <span css={buttonLabelStyle} onClick={handleClose}>
              Keep
            </span>
          </button>
          <button css={buttonStyle} onClick={handleRelease}>
            <span css={buttonLabelStyle}>Release</span>
          </button>
        </section>
      </Dialog>
    </>
  )
}

PokemonDelete.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonDelete
