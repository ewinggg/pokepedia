/** @jsxImportSource @emotion/react */

import Link from "next/link"
import NavCard from "./navcard"
import Item from "./item"
import List from "./list"
import routes from "../utils/routes"
import { css, keyframes } from "@emotion/react"
import media from "../styles/media"
import {
  bigTextStyle,
  buttonTextStyle,
  flexCenterStyle,
  textShadowStyle,
  thinBorderStyle,
} from "../styles/shared"

const iconColor = css`
  color: var(--dark-green);
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
  margin: 5px;
`

const cardStyle = css`
  ${thinBorderStyle}
  margin: 15px 0px 0px 0px;
  transition: all 0.25s;
  box-shadow: 10px 10px 0 var(--dark-green);
  &:active {
    box-shadow: none;
  }
`

const listStyle = css`
  gap: 50px;
  ${media.xs} {
    flex-direction: column;
    gap: 25px;
  }
`

const Navbar = () => (
  <nav data-testid="navbar">
    <List css={listStyle}>
      {
        // Iterate each route from routes
        routes.map((route) => (
          <Item key={route.id}>
            <Link href={route.path} passHref={true}>
              <a>
                <NavCard css={cardStyle} cssContent={cardContentStyle}>
                  <span css={iconColor}>{route.icon}</span>
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
