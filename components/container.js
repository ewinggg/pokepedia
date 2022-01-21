/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"
import media from "../styles/media"

const baseStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 25px auto;
  ${media.sm} {
    align-items: flex-start;
    max-width: 685px;
    gap: 30px;
  }
  ${media.md} {
    max-width: 768px;
  }
  ${media.xl} {
    max-width: 1024px;
  }
`

const Container = forwardRef((props, ref) => {
  const { children, css, ...rest } = props

  return (
    <div className="container" ref={ref} css={[baseStyle, css]} {...rest}>
      {children}
    </div>
  )
})

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Container
