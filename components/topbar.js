import Image from "next/image"
import Navbar from "./navbar"
import logo from "../public/logo.png"
import styled from "@emotion/styled"
import media from "../styles/media"

const StyledHeader = styled.header`
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
  <StyledHeader>
    <Image src={logo} alt="Pokepedia logo" />
    <Navbar />
  </StyledHeader>
)

export default Topbar
