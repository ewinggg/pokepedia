import { darkColors, lightColors } from "../styles/colors"

const useColors = (flag = 0) => {
  const mappers = ["white", "purple", "cyan", "green"]

  const light = lightColors[mappers[flag]]
  const dark = darkColors[mappers[flag]]

  return { light, dark }
}

export default useColors
