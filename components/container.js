/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import styled from "@emotion/styled"
import media from "../styles/media"

const StyledContainer = styled.div`
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
  const { children, style, ...rest } = props

  return (
    <StyledContainer ref={ref} css={style} {...rest}>
      {children}
    </StyledContainer>
  )
})

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Container
