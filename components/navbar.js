import Link from "next/link"
import NavCard from "./navcard"
import Item from "./item"
import List from "./list"
import routes from "../utils/routes"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import { keyframes } from "@emotion/react"

const StyledNav = styled.nav``

const StyledIcon = styled.span`
  position: absolute;
  left: -30px;
  top: -15px;
`

const StyledRoute = styled.span`
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
  display: flex;
  align-items: center;
  margin: 6px 25px 5px 35px;

  &:hover svg {
    animation: ${rotate} ease-in-out 0.5s;
    animation-delay: 0.05s;
    animation-iteration-count: inherit;
    transform-origin: 50% 50%;
  }
`

const Navbar = () => (
  <StyledNav>
    <List>
      {
        // Iterate each route from routes
        routes.map((route) => (
          <Item key={route.id}>
            <Link href={route.path} passHref={true}>
              <a>
                <NavCard border={2} contentStyle={cardContentStyle}>
                  <StyledIcon>{route.icon}</StyledIcon>
                  <StyledRoute>{route.name}</StyledRoute>
                </NavCard>
              </a>
            </Link>
          </Item>
        ))
      }
    </List>
  </StyledNav>
)

export default Navbar
