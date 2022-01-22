/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Container from "./container"
import Topbar from "./topbar"
import { css } from "@emotion/react"

const layoutStyle = css`
  min-height: 100vh;
  height: 100%;
`

const mainStyle = css`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
`

const Layout = ({ children }) => (
  <div className="layout" css={layoutStyle}>
    <Container>
      <Topbar />
      <main css={mainStyle}>{children}</main>
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
}

export default Layout
