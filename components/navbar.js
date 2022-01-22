/** @jsxImportSource @emotion/react */

import Link from "next/link"
import NavCard from "./navcard"
import Item from "./item"
import List from "./list"
import routes from "../utils/routes"
import { css, keyframes } from "@emotion/react"

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

const cardStyle = css`
  border: 2px solid var(--dark-green);
  transition: all 0.25s;
  box-shadow: 9px 10px 0 var(--dark-green);
  transform: skew(-5deg);
  cursor: pointer;
  &:active {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`

const cardContentStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px 10px 5px 35px;
  transform: skew(5deg);
  width: 100%;
  &:hover svg {
    animation: ${rotate} ease-in-out 0.5s;
    animation-delay: 0.05s;
    animation-iteration-count: inherit;
    transform-origin: 50% 50%;
  }
`

const Navbar = () => (
  <nav>
    <List>
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
