/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"

const listStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 35px;
  flex-wrap: wrap;
`

const List = forwardRef((props, ref) => {
  const { children, css, ...rest } = props

  return (
    <ul ref={ref} css={[listStyle, css]} {...rest}>
      {children}
    </ul>
  )
})

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default List
