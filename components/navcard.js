/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"

const baseCardStyle = css`
  display: flex;
  box-shadow: 5px 5px 1px 4px var(--dark-green);
  border-width: ${({ border }) => border && `${border}px`};
  border-style: ${({ border }) => border && "solid"};
  border-color: ${({ brColor }) => brColor ?? "var(--dark-green)"};
  background-color: ${({ bgColor }) => bgColor ?? "var(--dark-white)"};
  border-radius: 20px;
  padding-top: ${({ pt }) => pt && `${pt}px`};
  padding-right: ${({ pr }) => pr && `${pr}px`};
  padding-bottom: ${({ pb }) => pb && `${pb}px`};
  padding-left: ${({ pl }) => pl && `${pl}px`};
  transition: all 0.25s;
  &:hover {
    box-shadow: 15px 15px 0 var(--dark-green);
    transform: translateX(5px);
  }
`

const NavCard = forwardRef((props, ref) => {
  const { children, cssContent, css, ...rest } = props

  return (
    <div className="card" ref={ref} css={[baseCardStyle, css]} {...rest}>
      <div className="card-content" css={cssContent}>
        {children}
      </div>
    </div>
  )
})

NavCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cssContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default NavCard
