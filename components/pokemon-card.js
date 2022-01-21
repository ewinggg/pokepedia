import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"
import Card from "./card"
import If from "./if"
import Heading from "./heading"
import useColors from "../hooks/useColors"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const cardStyle = css`
  padding: 25px 25px 70px 25px;
`

const cardContentStyle = css`
  position: relative;
  background-color: var(--light-white);
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const StyledMiniCard = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 3px 5px;
  z-index: 1;
  &.counter {
    position: absolute;
    right: -50px;
    top: -30px;
    border: 3px solid var(--dark-black);
    border-radius: 20px;
    background-color: var(--dark-white);
  }
  & .content {
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
  }
`

const StyledMain = styled.main`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 13px;
`

const headingStyle = css`
  font-size: 13px;
  color: var(--dark-black);
  z-index: 1;
  text-align: right;
  text-transform: uppercase;
`

const PokemonCard = ({ pokemon }) => {
  const { light, dark } = useColors(0)

  return (
    <If condition={typeof pokemon === "object"}>
      <Link href={`/pokemon/${pokemon.name}`} passHref={true}>
        <a>
          <Card
            bgColor={dark}
            border={4}
            css={cardStyle}
            cssContent={cardContentStyle}
          >
            <StyledHeader color={light}>
              <StyledMiniCard bgColor={dark}>
                <span className="content">
                  {`#${String(pokemon.id).padStart(3, "0")}`}
                </span>
              </StyledMiniCard>
              <StyledMiniCard bgColor={dark} className="counter">
                <span className="content">{`Owned: ${0}`}</span>
              </StyledMiniCard>
            </StyledHeader>
            <StyledMain>
              <Image
                src={pokemon.artwork}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Heading level={2} css={headingStyle}>
                {pokemon.name}
              </Heading>
            </StyledMain>
          </Card>
        </a>
      </Link>
    </If>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonCard
