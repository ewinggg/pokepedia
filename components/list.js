/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"
import { flexCenterStyle } from "../styles/shared"

const listStyle = css`
  ${flexCenterStyle}
  flex-wrap: wrap;
  gap: 35px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const List = forwardRef((props, ref) => {
  const { children, css, ...rest } = props

  return (
    <ul data-testid="list" ref={ref} css={[listStyle, css]} {...rest}>
      {children}
    </ul>
  )
})

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default List
