/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import styled from "@emotion/styled"

export const StyledCard = styled.div`
  display: flex;
  width: 150px;
  height: 200px;
  box-shadow: 5px 5px 1px 4px var(--dark-green);
  border-width: ${({ border }) => border && `${border}px`};
  border-style: ${({ border }) => border && "solid"};
  border-color: ${({ brColor }) => brColor ?? "var(--dark-green)"};
  background-color: ${({ bgColor }) => bgColor ?? "var(--dark-white)"};
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
    <StyledCard ref={ref} css={css} {...rest}>
      <div css={cssContent}>{children}</div>
    </StyledCard>
  )
})

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cssContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Card
