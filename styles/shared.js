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
