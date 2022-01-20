import { css } from "@emotion/react"

const globalStyles = css`
  html,
  body,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol,
  ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
`

export default globalStyles
