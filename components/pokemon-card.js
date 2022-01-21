import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"
import Card from "./card"
import If from "./if"
import Heading from "./heading"
import useColors from "../hooks/useColors"
import { css } from "@emotion/css"
import styled from "@emotion/styled"

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
  transform: skew(-15deg);
  padding: 3px 5px;
  z-index: 1;
  &.counter {
    position: absolute;
    right: -15px;
    top: -30px;
    border: 3px solid var(--dark-black);
    background-color: var(--dark-white);
  }
  & .content {
    display: inline-block;
    transform: skew(15deg);
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
  color: var(--dark-white);
  z-index: 1;
  text-transform: uppercase;
  text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
`

const PokemonCard = ({ pokemon }) => {
  // Get random color based on pokemon id
  const flag = pokemon.id % 3
  const { light, dark } = useColors(flag)

  return (
    <If condition={typeof pokemon === "object"}>
      <Link href="/" passHref={true}>
        <a>
          <Card
            bgColor={light}
            border={4}
            contentStyle={cardContentStyle}
            pt={15}
            pr={15}
            pb={50}
            pl={15}
          >
            <StyledHeader color={dark}>
              <StyledMiniCard bgColor={dark}>
                <span className="content">
                  {`#${String(pokemon.id).padStart(4, "0")}`}
                </span>
              </StyledMiniCard>
              <StyledMiniCard bgColor={dark} className="counter">
                <span className="content">{`Owned: ${0}`}</span>
              </StyledMiniCard>
            </StyledHeader>
            <StyledMain>
              <Image
                src={pokemon.dreamworld}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Heading level={2} style={headingStyle}>
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
