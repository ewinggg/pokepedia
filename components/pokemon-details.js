/** @jsxImportSource @emotion/react */

import Image from "next/image"
import PropTypes from "prop-types"
import Card from "./card"
import Heading from "../components/heading"
import If from "./if"
import { css, Global, keyframes } from "@emotion/react"
import dynamic from "next/dynamic"
import media from "../styles/media"
import {
  borderRadius,
  columnStyle,
  flexCenterStyle,
  rowStyle,
} from "../styles/shared"
import PokemonAbilityList from "./pokemon-ability-list"
import PokemonAdd from "./pokemon-add"
import PokemonMoveList from "./pokemon-move-list"
import PokemonStatList from "./pokemon-stat-list"
import PokemonTypeList from "./pokemon-type-list"
import { useAppContext } from "../state/context"
import useCachedImage from "../hooks/useCachedImage"
import useColors from "../hooks/useColors"

const bottomRightStyle = css`
  ${columnStyle}
  flex: 1;
`

const cardContentStyle = css`
  ${columnStyle}
  width: 100%;
  ${media.lg} {
    ${borderRadius}
  }
  ${media.sm} {
    ${rowStyle}
  }
`

const cardStyle = css`
  ${borderRadius}
  padding: 25px;
  flex: 3;
`

const detailsStyle = css`
  ${columnStyle}
  gap: 25px;
  ${media.md} {
    flex-direction: column;
    justify-content: space-between;
  }
`

const headerStyle = css`
  ${columnStyle}
`

const headingStyle = css`
  font-size: 25px;
  margin-bottom: 20px;
`

const imageStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  position: relative;
  & .shadow {
    display: inline-block;
    width: 200px;
    height: 40px;
    background: var(--light-black);
    border-radius: 50%;
    position: absolute;
    bottom: 60px;
  }
`

const mainStyle = css`
  ${columnStyle}
  gap: 10px;
`

const profileStyle = css`
  ${columnStyle}
  flex: 1;
`

const sectionColumnStyle = css`
  ${columnStyle}
  gap: 10px;
`

const topStyle = css`
  ${media.md} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const sectionRowStyle = css`
  ${rowStyle}
  align-items: center;
  gap: 15px;
  margin-top: 5px;
`

const textStyle = css`
  font-weight: 500;
  text-transform: lowercase;
`

const topLeftStyle = css`
  ${columnStyle}
  flex: 1;
`

const sectionCenterStyle = css`
  align-self: center;
`

const Pokeball = dynamic(() => import("./pokeball"), {
  ssr: false,
})

const PokemonDetails = ({ pokemon }) => {
  const {
    id,
    image: initialImage,
    sprites,
    name,
    types,
    height,
    weight,
    base_experience,
    abilities,
    stats,
    moves,
  } = pokemon
  // Get state from context
  const { isCatched } = useAppContext()

  // Set profile image from cached or request
  const image = useCachedImage(name, initialImage)
  const profileImage = image ?? sprites.front_default

  // Get random color based on pokemon id
  const flag = id % 3
  const { light } = useColors(flag)

  // Set body color dynamically based on pokemon id
  const bodyStyle = css`
    body {
      background-color: white;
    }
  `

  return (
    <If condition={pokemon && typeof pokemon === "object"}>
      <Global styles={bodyStyle} />
      <section className="pokemon-image" css={imageStyle}>
        <If condition={!isCatched || isCatched}>
          <Image
            className="image"
            src={profileImage}
            alt={name}
            width={500}
            height={500}
          />
        </If>
        <span className="shadow"></span>
      </section>
      <Card css={cardStyle} cssContent={cardContentStyle} withBorder withShadow>
        <div css={detailsStyle}>
          <div css={profileStyle}>
            <header css={headerStyle}>
              <section css={topStyle}>
                <section className="pokemon-name" css={sectionRowStyle}>
                  <span css={headingStyle}>
                    {`#${String(id).padStart(3, "0")}`}
                  </span>
                  <Heading level={1} css={headingStyle}>
                    {name}
                  </Heading>
                </section>
                <section className="pokemon-add" css={sectionCenterStyle}>
                  <PokemonAdd pokemon={pokemon} />
                </section>
              </section>
            </header>
            <main css={mainStyle}>
              <section css={topStyle}>
                <section className="pokemon-type" css={sectionRowStyle}>
                  <Heading level={2}>Type :</Heading>
                  <PokemonTypeList pokemonTypes={types} />
                </section>
                <section className="pokemon-height" css={sectionRowStyle}>
                  <Heading level={2}>
                    Height :
                    <span css={textStyle}>
                      {`${height ? height + '"' : "unknown"}`}
                    </span>
                  </Heading>
                </section>
                <section className="pokemon-weight" css={sectionRowStyle}>
                  <Heading level={2}>
                    Weight :
                    <span css={textStyle}>
                      {`${weight ? weight + " lbs" : "unknown"}`}
                    </span>
                  </Heading>
                </section>
              </section>
            </main>
          </div>
          <div css={topLeftStyle}>
            <section className="pokemon-experience" css={sectionRowStyle}>
              <Heading level={2} css={headingStyle}>
                Experience
                <span css={textStyle}>{`(${base_experience})`}</span>
              </Heading>
            </section>
            <section className="pokemon-abilities" css={sectionColumnStyle}>
              <Heading level={2} css={headingStyle}>
                Abilities
              </Heading>
              <PokemonAbilityList pokemonAbilities={abilities} />
            </section>
            <section className="pokemon-stats" css={sectionColumnStyle}>
              <Heading level={2} css={headingStyle}>
                Stats
              </Heading>
              <PokemonStatList pokemonStats={stats} />
            </section>
          </div>
          <div css={bottomRightStyle}>
            <section className="pokemon-moves" css={sectionColumnStyle}>
              <Heading level={2} css={headingStyle}>
                Moves
              </Heading>
              <PokemonMoveList pokemonMoves={moves} />
            </section>
          </div>
        </div>
      </Card>
    </If>
  )
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonDetails
