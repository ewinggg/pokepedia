import PropTypes from "prop-types"

const If = ({ children, condition }) => {
  if (!condition) return null

  // Render children if condition is truthy.
  return children
}

If.propTypes = {
  // PropTypes.node: Anything that can be rendered: numbers, strings, elements or an array.
  // PropTypes.element: A React element.
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  condition: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([undefined])])
    .isRequired,
}

export default If
