import PropTypes from "prop-types"
import Container from "./container"
import Topbar from "./topbar"
import styled from "@emotion/styled"

const StyledLayout = styled.div`
  min-height: 100vh;
  height: 100%;
`

const Layout = ({ children }) => (
  <StyledLayout>
    <Container>
      <Topbar />
      <main>{children}</main>
    </Container>
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
}

export default Layout
