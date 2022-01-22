/** @jsxImportSource @emotion/react */

import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"
import Card from "./card"
import If from "./if"
import Heading from "./heading"
import useColors from "../hooks/useColors"
import { css } from "@emotion/react"

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

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const miniCardStyle = css`
  align-items: center;
  background-color: var(--bgColor);
  padding: 3px 5px;
  z-index: 1;
  border: none;
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

const miniCardContentStyle = css`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
`

const mainStyle = css`
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
      <Link
        href={{
          pathname: "pokemon/[name]",
          query: { img: pokemon.dreamworld },
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
