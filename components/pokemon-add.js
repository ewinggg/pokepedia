/** @jsxImportSource @emotion/react */

import Card from "./card"
import Pokeball from "./icons/pokeball"
import { CATCH_POKEMON } from "../state/action-types"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"

const buttonStyle = css`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`

const navCardStyle = css`
  border: 2px solid var(--dark-black);
  transition: all 0.25s;
  transform: skew(-5deg);
  cursor: pointer;
  &:active {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`

const navCardContentStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px -10px 5px 35px;
  transform: skew(5deg);
  width: 100%;
  &:hover svg {
    animation: ${rotate} ease-in-out 0.5s;
    animation-delay: 0.05s;
    animation-iteration-count: inherit;
    transform-origin: 50% 50%;
  }
`

const catchStyle = css`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-white);
  text-transform: uppercase;
  text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
`

const iconStyle = css`
  position: absolute;
  left: -50px;
  top: -15px;
`

const PokemonAdd = () => {
  const { dispatch } = useAppContext()

  // Handle click for adding pokemon
  const handleClickAdd = () => {
    const probability = (number) => Math.random() <= number
    const isCatched = probability(0.5)

    dispatch({ type: CATCH_POKEMON, payload: isCatched })
  }

  return (
    <Card
      css={navCardStyle}
      cssContent={navCardContentStyle}
      withBorder
      withShadow
    >
      <button css={buttonStyle} onClick={handleClickAdd}>
        <span css={iconStyle}>
          <Pokeball size={3} />
        </span>
        <span css={catchStyle}>Catch Pokemon</span>
      </button>
    </Card>
  )
}

export default PokemonAdd
