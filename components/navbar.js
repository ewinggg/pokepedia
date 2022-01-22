/** @jsxImportSource @emotion/react */

import Link from "next/link"
import NavCard from "./navcard"
import Item from "./item"
import List from "./list"
import routes from "../utils/routes"
import { css, keyframes } from "@emotion/react"
import {
  buttonTextStyle,
  flexCenterStyle,
  textShadowStyle,
  thinBorderStyle,
} from "../styles/shared"

const baseIconStyle = css`
  position: absolute;
  left: -50px;
  top: -15px;
`
const baseRouteStyle = css`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-black);
  text-transform: uppercase;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`

const cardContentStyle = css`
  ${flexCenterStyle}
  margin: 6px 10px 5px 20px;
  &:hover svg {
    animation: ${rotate} ease-in-out 0.5s;
    animation-delay: 0.05s;
    animation-iteration-count: inherit;
    transform-origin: 50% 50%;
  }
`

const cardStyle = css`
  ${thinBorderStyle}
  transition: all 0.25s;
  box-shadow: 10px 10px 0 var(--dark-green);
  &:active {
    box-shadow: none;
  }
`

const iconStyle = css`
  position: absolute;
  left: -50px;
  top: -15px;
`

const listStyle = css`
  gap: 50px;
`

const routeStyle = css`
  ${buttonTextStyle}
  ${textShadowStyle}
`

const Navbar = () => (
  <nav>
    <List css={listStyle}>
      {
        // Iterate each route from routes
        routes.map((route) => (
          <Item key={route.id}>
            <Link href={route.path} passHref={true}>
              <a>
                <NavCard css={cardStyle} cssContent={cardContentStyle}>
                  <span css={baseIconStyle}>{route.icon}</span>
                  <span css={baseRouteStyle}>{route.name}</span>
                </NavCard>
              </a>
            </Link>
          </Item>
        ))
      }
    </List>
  </nav>
)

export default Navbar
