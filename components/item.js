/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import styled from "@emotion/styled"

const StyledItem = styled.li`
  text-indent: 0;
  list-style-type: none;
`

const Item = forwardRef((props, ref) => {
  const { children, style, ...rest } = props

  return (
    <StyledItem ref={ref} css={style} {...rest}>
      {children}
    </StyledItem>
  )
})

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Item
