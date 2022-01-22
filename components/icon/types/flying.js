import PropTypes from "prop-types"

const Flying = ({ color, size }) => (
  <svg
    aria-label="Flying"
    viewBox="0 0 512 512"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Flying</title>
    <path
      d="M489.579,254.766c-12.942-16.932-30.829-29.887-50.839-36.933c-0.828-48.454-40.501-87.618-89.148-87.618
				c-7.618,0-15.213,0.993-22.647,2.958c-12.102-15.076-27.37-27.615-44.441-36.457c-19.642-10.173-40.881-15.331-63.127-15.331
				c-74.705,0-135.736,59.676-137.931,133.859C33.885,227.82,0,271.349,0,321.107c0,60.383,49.125,109.508,109.508,109.508h292.983
				C462.875,430.615,512,381.49,512,321.107C512,296.896,504.246,273.956,489.579,254.766z M402.491,415.061H109.508
				c-51.806,0-93.953-42.147-93.953-93.953c0-44.549,31.647-83.274,75.248-92.079l6.342-1.281l-0.106-6.47
				c-0.008-0.465-0.036-0.923-0.069-1.38c-0.012-0.173-0.031-0.344-0.031-0.52c0-67.512,54.925-122.437,122.436-122.437
				c39.135,0,75.005,18.162,98.411,49.828l3.349,4.53l5.348-1.769c7.542-2.494,15.317-3.759,23.108-3.759
				c40.587,0,73.606,33.019,73.606,73.607c0,0.645-0.05,1.382-0.103,2.164c-0.034,0.505-0.067,1.011-0.093,1.518l-0.303,6.145
				l5.911,1.709c19.171,5.544,36.435,17.369,48.61,33.297c12.577,16.453,19.224,36.127,19.224,56.895
				C496.445,372.913,454.297,415.061,402.491,415.061z"
      fill={color}
    />
    <path
      d="M135.62,193.401h15.555c0-26.66,21.69-48.35,48.351-48.35v-15.555C164.289,129.495,135.62,158.163,135.62,193.401z"
      fill={color}
    />
  </svg>
)

Flying.defaultProps = {
  color: "var(--dark-white)",
  size: 1.5,
}

Flying.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default Flying