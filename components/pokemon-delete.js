import PropTypes from "prop-types"
import { selectPokemon, toggleDialog } from "../state/actions"
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
    color: var(--light-blue);
  }
`

const PokemonDelete = ({ pokemon }) => {
  const { dispatch } = useAppContext()

  const handleConfirm = (event, selectedPokemon) => {
    event.preventDefault()

    dispatch(selectPokemon(selectedPokemon))
    dispatch(toggleDialog())
  }

  return (
    <button
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
