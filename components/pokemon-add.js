/** @jsxImportSource @emotion/react */

import If from "./if"
import Dialog from "./dialog"
import { catchPokemon, toggleDialog } from "../state/actions"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"
import {
  borderRadius,
  boxShadowStyle,
  buttonTextStyle,
  flexCenterStyle,
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

const buttonStyle = css`
  ${boxShadowStyle}
  ${borderRadius}
  ${thinBorderStyle}
  background-color: var(--dark-white);
  padding: 0;
  cursor: pointer;
  transition: all 0.25s;
  &:active {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`

const headingStyle = css`
  ${headingTextStyle}
  padding: 10px;
`

const PokemonAdd = () => {
  const { state, dispatch } = useAppContext()

  // Handle click for adding pokemon
  const handleClickAdd = () => {
    // Probability/Success rate
    const probability = (number) => Math.random() <= number
    const isCatched = probability(0.5)

    dispatch(catchPokemon(isCatched))
    dispatch(toggleDialog())
  }

  // Handle close dialog
  const handleCloseDialog = () => {
    dispatch(toggleDialog())
  }

  return (
    <>
      <button css={buttonStyle} onClick={handleClickAdd}>
        <span css={buttonLabelStyle}>Catch Pokemon</span>
      </button>
      <Dialog open={state.dialogOpen} handleClose={handleCloseDialog}>
        <If condition={!state.isCatched}>
          <span css={headingStyle}>Pokémon runs away!</span>
        </If>
        <If condition={state.isCatched}>
          <span css={headingStyle}>You got the Pokémon!</span>
        </If>
      </Dialog>
    </>
  )
}

export default PokemonAdd
