import PropTypes from "prop-types"
import Container from "./container"
import Topbar from "./topbar"
import styled from "@emotion/styled"

const StyledLayout = styled.div`
  min-height: 100vh;
  height: 100%;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
`

const Layout = ({ children }) => (
  <StyledLayout>
    <Container>
      <Topbar />
      <StyledMain>{children}</StyledMain>
    </Container>
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
}

export default Layout
