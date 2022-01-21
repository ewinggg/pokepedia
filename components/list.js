import PropTypes from "prop-types"
import { forwardRef } from "react"
import styled from "@emotion/styled"
import media from "../styles/media"

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  ${media.sm} {
    justify-content: space-between;
  }
  gap: 35px;
  flex-wrap: wrap;
`

const List = forwardRef((props, ref) => {
  const { children, style, ...rest } = props

  return (
    <StyledList ref={ref} className={style} {...rest}>
      {children}
    </StyledList>
  )
})

List.defaultProps = {
  style: "",
}

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.string,
}

export default List
