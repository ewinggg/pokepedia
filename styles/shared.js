import { css } from "@emotion/react"

export const borderRadius = css`
  border-radius: 20px;
`
export const buttonTextStyle = css`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`

export const flexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const boxShadowStyle = css`
  box-shadow: 9px 10px 0 var(--light-blue);
`

export const textShadowStyle = css`
  color: var(--dark-black);
`

export const thickBorderStyle = css`
  border: 4px solid var(--dark-black);
`

export const thinBorderStyle = css`
  border: 2px solid var(--dark-black);
`

export const headingTextStyle = css`
  ${buttonTextStyle}
  font-weight: 700;
`

export const overlapStyle = css`
  position: absolute;
  right: -15px;
  top: -30px;
  background-color: var(--dark-white);
`

export const buttonLabelStyle = css`
  ${buttonTextStyle}
  ${flexCenterStyle}
  ${smallReverseSkewStyle}
  ${textShadowStyle}
  margin: 6px -10px 5px 20px;
`

export const buttonsStyle = css`
  display: flex;
  gap: 30px;
`

export const buttonStyle = css`
  ${boxShadowStyle}
  ${smallSkewStyle}
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
