/** @jsxImportSource @emotion/react */

import Pokeball from "./pokeball"
import { css, keyframes } from "@emotion/react"

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`

const loadingStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    animation: ${rotate} ease-in-out 1s;
    animation-delay: 0.05s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
  }
`

const Loading = () => (
  <span className="loading" css={loadingStyle}>
    <Pokeball size={5} />
  </span>
)

export default Loading
