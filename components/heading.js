/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"
import { forwardRef } from "react"
import If from "./if"
import styled from "@emotion/styled"

const StyledHeading = styled.h1`
  font-size: 100%;
  margin: 0;
`

const Heading = forwardRef((props, ref) => {
  const { children, level, css, ...rest } = props

  // Set level from h1 to h6
  // If level is not valid, fallback to h2
  const tag = `h${level < 7 ? level : 2}`

  return (
    <If condition={typeof children === "string"}>
      <StyledHeading as={tag} ref={ref} css={css} {...rest}>
        {children}
      </StyledHeading>
    </If>
  )
})

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  level: PropTypes.number.isRequired,
}

export default Heading
