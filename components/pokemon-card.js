/** @jsxImportSource @emotion/react */

import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"
import Card from "./card"
import If from "./if"
import Heading from "./heading"
import useColors from "../hooks/useColors"
import { css } from "@emotion/react"
import {
  borderRadius,
  textShadowStyle,
  thinBorderStyle,
} from "../styles/shared"

const cardContentStyle = css`
  ${borderRadius}
  position: relative;
  background-color: var(--light-white);
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

const cardStyle = css`
  ${borderRadius}
  padding: 25px 25px 70px 25px;
  background-color: var(--bgColor);
  transition: all 0.25s;
  padding: 25px 25px 70px 25px;
  box-shadow: 10px 10px 10px 5px #eceef9;
  &:hover {
    transform: translateX(-5px) translateY(-5px);
    box-shadow: 25px 15px 15px #eceef9;
  }
`

const headingStyle = css`
  font-size: 13px;
  text-align: right;
  text-transform: uppercase;
  z-index: 1;
  ${textShadowStyle}
`

const mainStyle = css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 13px;
  position: absolute;
  top: 30px;
`

const miniCardContentStyle = css`
  ${borderRadius}
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
`

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const miniCardStyle = css`
  ${borderRadius}
  align-items: center;
  background-color: var(--bgColor);
  padding: 3px 5px;
  z-index: 1;
  border: none;
  &.counter {
    position: absolute;
    right: -50px;
    top: -30px;
    ${thinBorderStyle}
    border-radius: 20px;
    background-color: var(--dark-white);
  }
  & .content {
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
  }
`

const PokemonCard = ({ pokemon }) => {
  const { light, dark } = useColors("white")

  return (
    <If condition={typeof pokemon === "object"}>
      <Link
        href={{
          pathname: "pokemon/[name]",
          query: { image: pokemon.artwork },
        }}
        as={`/pokemon/${pokemon.name}`}
        passHref={true}
      >
        <a>
          <Card
            bgColor={dark}
            border={4}
            css={cardStyle}
            cssContent={cardContentStyle}
            style={{ "--bgColor": light }}
          >
            <header css={headerStyle}>
              <Card
                css={miniCardStyle}
                cssContent={miniCardContentStyle}
                style={{ "--bgColor": dark }}
              >
                {`#${String(pokemon.id).padStart(3, "0")}`}
              </Card>
              <Card
                className="counter"
                css={miniCardStyle}
                cssContent={miniCardContentStyle}
                style={{ "--bgColor": dark }}
              >
                {`Owned: ${0}`}
              </Card>
            </header>
            <main css={mainStyle}>
              <Image
                src={pokemon.artwork}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Heading level={2} css={headingStyle}>
                {pokemon.name}
              </Heading>
            </main>
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
