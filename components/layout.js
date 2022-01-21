/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Container from "./container"
import Topbar from "./topbar"
import { css } from "@emotion/react"

const baseLayoutStyle = css`
  min-height: 100vh;
  height: 100%;
`

const baseMainStyle = css`
  display: flex;
  flex-direction: column;
  gap: 35px;
`

const Layout = ({ children }) => (
  <div className="layout" css={baseLayoutStyle}>
    <Container>
      <Topbar />
      <main css={baseMainStyle}>{children}</main>
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
}

export default Layout
