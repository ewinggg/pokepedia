import PropTypes from "prop-types"
import Card from "./card"
import Heading from "./heading"
import If from "./if"
import { css } from "@emotion/react"
import media from "../styles/media"
import {
  buttonLabelStyle,
  buttonStyle,
  columnStyle,
  dialogStyle,
  flexCenterStyle,
  headingStyle,
} from "../styles/shared"

const cardContentStyle = css`
  ${columnStyle}
  align-items: center;
`

const cardStyle = css`
  padding: 25px;
  flex: 3;
  ${dialogStyle}
  ${media.lg} {
    padding: 50px;
  }
`

const messageBoxStyle = css`
  ${flexCenterStyle}
  flex-direction: row;
  ${media.sm} {
    flex-direction: column;
  }
`

const MessageBox = ({ clickText, message, onClick }) => (
  <div css={messageBoxStyle}>
    <Card css={cardStyle} cssContent={cardContentStyle} withBorder withShadow>
      <Heading level={1} css={headingStyle}>
        {message}
      </Heading>
      <If condition={typeof onClick !== "undefined" && clickText?.length > 0}>
        <button css={buttonStyle} onClick={onClick}>
          <span css={buttonLabelStyle}>{clickText}</span>
        </button>
      </If>
    </Card>
  </div>
)

MessageBox.propTypes = {
  clickText: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default MessageBox
