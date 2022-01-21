/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"

const baseStyle = css`
  text-indent: 0;
  list-style-type: none;
`

const Item = forwardRef((props, ref) => {
  const { children, css, ...rest } = props

  return (
    <li ref={ref} css={[baseStyle, css]} {...rest}>
      {children}
    </li>
  )
})

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Item
