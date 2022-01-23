import { jsx } from "@emotion/react"
import PropTypes from "prop-types"
import { forwardRef } from "react"
import { css } from "@emotion/react"

const headingStyle = css`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 100%;
  margin: 0;
  text-transform: capitalize;
  color: var(--dark-black);
`

const Heading = forwardRef((props, ref) => {
  const { children, level, css, ...rest } = props

  // Set level from h1 to h6
  // If level is not valid, fallback to h2
  const tag = `h${level < 7 ? level : 2}`

  // Create dynamic heading
  const heading = jsx(tag, { css: [headingStyle, css], ref, ...rest }, children)

  return heading
})

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  level: PropTypes.number.isRequired,
}

export default Heading
