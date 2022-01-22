/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Card from "./card"
import Close from "./close"
import { css } from "@emotion/react"
import media from "../styles/media"
import { flexCenterStyle, thickBorderStyle } from "../styles/shared"

const backdropStyle = css`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
`

const buttonStyle = css`
  ${thickBorderStyle}
  cursor: pointer;
  position: absolute;
  top: -15px;
  right: -10px;
`
const dialogContentStyle = css`
  ${flexCenterStyle}
`

const dialogStyle = css`
  ${flexCenterStyle}
  position: fixed;
  width: 80%;
  height: auto;
  ${media.sm} {
    width: 60%;
    width: 40%;
  }
`

const openStyle = css`
  ${flexCenterStyle}
`

const Dialog = ({ children, handleClose, open }) => {
  return (
    <div css={[backdropStyle, open && openStyle]}>
      <Card
        className="dialog"
        css={dialogStyle}
        cssContent={dialogContentStyle}
        withBorder
        withShadow
      >
        {children}
        <button type="button" onClick={handleClose} css={buttonStyle}>
          <Close />
        </button>
      </Card>
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default Dialog
