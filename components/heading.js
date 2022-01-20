import PropTypes from "prop-types"
import If from "./if"
import styled from "@emotion/styled"

const StyledHeading = styled.h1`
  color: inherit;
`

const Heading = ({ children, level, style }) => {
  // Set level from h1 to h6
  // If level is not valid, fallback to h2
  const tag = `h${level < 7 ? level : 2}`

  return (
    <If condition={typeof children === "string"}>
      <StyledHeading as={tag} className={style}>
        {children}
      </StyledHeading>
    </If>
  )
}

Heading.defaultProps = {
  style: "",
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  style: PropTypes.string,
}

export default Heading
