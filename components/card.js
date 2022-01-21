/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"

const baseCardStyle = css`
  display: flex;
  border: 4px solid var(--dark-green);
  background-color: var(--light-white);
  border-radius: 20px;
  transition: all 0.25s;
  &:hover {
    box-shadow: 15px 15px 0 var(--dark-green);
    transform: translateX(5px);
  }
`

const Card = forwardRef((props, ref) => {
  const { children, cssContent, css, ...rest } = props

  return (
    <div className="card" ref={ref} css={[baseCardStyle, css]} {...rest}>
      <div className="card-content" css={cssContent}>
        {children}
      </div>
    </div>
  )
})

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cssContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Card
