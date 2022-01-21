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
  border-color: ${({ brColor }) => brColor ?? "var(--dark-white)"};
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
  & div {
    // transform: skew(5deg);
  }
`

const Card = forwardRef((props, ref) => {
  const { children, contentStyle, style, ...rest } = props

  return (
    <StyledCard ref={ref} className={style} {...rest}>
      <div className={contentStyle}>{children}</div>
    </StyledCard>
  )
})

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  contentStyle: PropTypes.string,
  style: PropTypes.string,
}

export default Card
