/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"
import media from "../styles/media"
import { flexCenterStyle } from "../styles/shared"

const containerStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  padding: 25px;
  ${media.sm} {
    align-items: flex-start;
    max-width: 685px;
    gap: 30px;
  }
  ${media.md} {
    max-width: 900px;
  }
  ${media.xl} {
    max-width: 1024px;
  }
`

const Container = forwardRef((props, ref) => {
  const { children, css, ...rest } = props

  return (
    <div
      data-testid="container"
      ref={ref}
      css={[containerStyle, css]}
      {...rest}
    >
      {children}
    </div>
  )
})

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Container
