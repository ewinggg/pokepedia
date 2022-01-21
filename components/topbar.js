import Image from "next/image"
import logo from "../public/logo.png"
import styled from "@emotion/styled"

export const StyledHeader = styled.header``

const Topbar = () => (
  <StyledHeader>
    <Image src={logo} alt="Kepomon logo" />
  </StyledHeader>
)

export default Topbar
