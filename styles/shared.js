import { css } from "@emotion/react"
import media from "./media"

export const borderRadius = css`
  border-radius: 20px;
`
export const bigTextStyle = css`
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
  border: 2px solid var(--dark-green);
`

export const overlapStyle = css`
  position: absolute;
  top: -30px;
  right: -15px;
`

export const buttonLabelStyle = css`
  ${bigTextStyle}
  ${flexCenterStyle}
  ${textShadowStyle}
  margin: 6px -10px 5px 20px;
`

export const buttonStyle = css`
  ${boxShadowStyle}
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

export const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const rowStyle = css`
  display: flex;
  flex-direction: row;
  gap: 25px;
`

export const sectionStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 15px;
  text-align: center;
`

export const headingStyle = css`
  ${bigTextStyle}
  font-weight: 700;
  text-align: center;
`

export const dialogStyle = css`
  width: 80%;
  ${media.sm} {
    width: 400px;
  }
`
