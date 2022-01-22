import { darkColors, lightColors } from "../styles/colors"

/**
 * Hook to generate css variable of random colors
 * @param {Number} flag The given index to map
 * @returns {Object} The object of css variable colors
 */

const useColors = (flag = 0) => {
  const mappers = ["purple", "cyan", "green"]

  const light = lightColors[mappers[flag]]
  const dark = darkColors[mappers[flag]]

  return { light, dark }
}

export default useColors
