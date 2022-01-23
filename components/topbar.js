import Image from "next/image"
import Navbar from "./navbar"
import logo from "../public/logo.png"
import { css } from "@emotion/react"
import media from "../styles/media"

export const headerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: auto;
  ${media.sm} {
    flex-direction: row;
    width: 100%;
  }
`

const Topbar = () => (
  <header data-testid="topbar" css={headerStyle}>
    <Image src={logo} alt="Pokepedia logo" />
    <Navbar />
  </header>
)

export default Topbar
