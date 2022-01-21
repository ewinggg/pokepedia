import Item from "./item"
import List from "./list"
import routes from "../utils/routes"
import styled from "@emotion/styled"

const StyledNav = styled.nav``

const Navbar = () => (
  <StyledNav>
    <List>
      {
        // Iterate each route from routes
        routes.map((route) => (
          <Item key={route.id}>{route.name}</Item>
        ))
      }
    </List>
  </StyledNav>
)

export default Navbar
