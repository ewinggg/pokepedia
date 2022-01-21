import PropTypes from "prop-types"
import styled from "@emotion/styled"
import media from "../styles/media"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  ${media.xs} {
    align-items: flex-start;
    max-width: 685px;
  }
  ${media.sm} {
    max-width: 768px;
  }
  ${media.lg} {
    max-width: 1024px;
  }
  margin: 25px auto;
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
}

export default Container
