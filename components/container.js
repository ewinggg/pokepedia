import PropTypes from "prop-types"
import { forwardRef } from "react"
import styled from "@emotion/styled"
import media from "../styles/media"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 25px auto;
  ${media.sm} {
    align-items: flex-start;
    max-width: 685px;
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
    <StyledContainer ref={ref} className={style} {...rest}>
      {children}
    </StyledContainer>
  )
})

Container.defaultProps = {
  style: "",
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.string,
}

export default Container
