/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import Card from "./card"
import Close from "./close"
import If from "./if"
import { css } from "@emotion/react"
import Portal from "./portal"
import {
  borderRadius,
  buttonLabelStyle,
  buttonsStyle,
  buttonStyle,
  dialogStyle,
  flexCenterStyle,
  overlapStyle,
  thickBorderStyle,
} from "../styles/shared"

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

const buttonCloseStyle = css`
  ${overlapStyle}
  ${thickBorderStyle}
  top: -15px;
  right: -10px;
  cursor: pointer;
`

const cardContentStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 25px;
  padding: 25px;
`

const cardStyle = css`
  ${borderRadius}
  ${dialogStyle}
  ${flexCenterStyle}
  position: fixed;
  height: auto;
`

const openStyle = css`
  ${flexCenterStyle}
`

const Dialog = ({
  children,
  onCancel,
  cancelText,
  onConfirm,
  confirmText,
  open,
  withButtons,
}) => (
  <Portal id="dialog">
    <div css={[backdropStyle, open && openStyle]}>
      <Card
        data-testid="dialog"
        css={cardStyle}
        cssContent={cardContentStyle}
        withBorder
        withShadow
      >
        <button type="button" onClick={onCancel} css={buttonCloseStyle}>
          <Close />
        </button>
        {children}
        <If condition={withButtons}>
          <section css={buttonsStyle}>
            <button css={buttonStyle} onClick={onCancel}>
              <span css={buttonLabelStyle}>{cancelText}</span>
            </button>
            <button css={buttonStyle}>
              <span css={buttonLabelStyle} onClick={onConfirm}>
                {confirmText}
              </span>
            </button>
          </section>
        </If>
      </Card>
    </div>
  </Portal>
)

Dialog.defaultProps = {
  cancelText: "Cancel",
  confirmText: "Confirm",
  withButtons: true,
}

Dialog.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  withButtons: PropTypes.oneOf([true, false, undefined]),
}

export default Dialog
