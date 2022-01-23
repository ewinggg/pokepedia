/** @jsxImportSource @emotion/react */

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import Card from "./card"
import Heading from "./heading"
import If from "./if"
import PokemonDelete from "./pokemon-delete"
import useColors from "../hooks/useColors"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"
import media from "../styles/media"
import {
  borderRadius,
  overlapStyle,
  textShadowStyle,
  thinBorderStyle,
} from "../styles/shared"

const cardContentStyle = css`
  ${borderRadius}
  position: relative;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  ${media.xs} {
    width: 79px;
    height: 79px;
  }
`

const cardStyle = css`
  ${borderRadius}
  background-color: white;
  transition: all 0.25s;
  padding: 20px 20px 90px 20px;
  box-shadow: 0px 10px 10px 5px #eceef9;
  &:hover {
    transform: translateX(-5px) translateY(-5px);
    box-shadow: 25px 15px 10px #eceef9;
  }
  ${media.xs} {
    padding: 15px 15px 38px 15px;
  }
`

const headingStyle = css`
  font-size: 13px;
  text-align: right;
  text-transform: uppercase;
  z-index: 1;
  ${textShadowStyle}
  ${media.xs} {
    font-size: 10px;
  }
`

const mainStyle = css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 13px;
  position: absolute;
  top: 30px;
  ${media.xs} {
    width: 79px;
    top: 20px;
  }
`

const miniCardContentStyle = css`
  ${borderRadius}
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  ${media.xs} {
    font-size: 9px;
  }
`

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const miniCardStyle = css`
  ${borderRadius}
  display: flex;
  width: 78px;
  align-items: center;
  background-color: var(--bgColor);
  padding: 3px 5px;
  border: none;
  &.counter {
    ${thinBorderStyle}
    border-radius: 20px;
    ${overlapStyle}
    background-color: var(--dark-white);
  }
  & .content {
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
  }
`

const PokemonCard = ({ pokemon }) => {
  const router = useRouter()
  const { ownedPokemons, isAmp } = useAppContext()

  const isCollectionPage = router?.pathname === "/collection"

  // Get owned state for each pokemon
  const owned = ownedPokemons.filter(({ id }) => id === pokemon.id).length

  const { light, dark } = useColors("white")

  // Get pokemon image
  const image = pokemon.image ?? pokemon.image

  return (
    <If condition={typeof pokemon === "object"}>
      <Link
        href={{
          pathname: "pokemon/[name]",
          query: { image },
        }}
        as={`/pokemon/${pokemon.name}`}
        passHref={true}
      >
        <a data-testid="link">
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

              <If condition={!isCollectionPage}>
                <Card
                  className="counter"
                  css={miniCardStyle}
                  cssContent={miniCardContentStyle}
                  style={{ "--bgColor": dark }}
                >
                  {`Owned: ${owned}`}
                </Card>
              </If>

              <If condition={isCollectionPage}>
                <PokemonDelete pokemon={pokemon} />
              </If>
            </header>
            <main css={mainStyle}>
              <If condition={!isAmp}>
                <Image
                  src={image}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </If>
              <If condition={isAmp}>
                <amp-img
                  src={image}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </If>
              <Heading level={2} css={headingStyle}>
                <span>
                  <If condition={pokemon.nickname !== undefined}>
                    {`${pokemon.nickname} -`}
                  </If>
                  <div>{pokemon.name}</div>
                </span>
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
