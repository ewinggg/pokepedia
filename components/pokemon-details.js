import Image from "next/image"
import PropTypes from "prop-types"
import Card from "./card"
import Heading from "../components/heading"
import Pokeball from "./pokeball"
import If from "./if"
import { css, Global, keyframes } from "@emotion/react"
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
  padding: 50px;
  flex: 3;
  ${media.lg} {
    ${borderRadius}
  }
`

const detailsStyle = css`
  ${columnStyle}
  gap: 25px;
  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const headerStyle = css`
  ${columnStyle}
`

const headingStyle = css`
  font-size: 25px;
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
    bottom: -10px;
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

const sectionRowStyle = css`
  ${rowStyle}
  align-items: center;
  gap: 15px;
`

const textStyle = css`
  font-weight: 500;
  text-transform: lowercase;
`

const topLeftStyle = css`
  ${columnStyle}
  flex: 1;
`

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
      background-color: ${light};
    }
  `

  return (
    <If condition={pokemon && typeof pokemon === "object"}>
      <Global styles={bodyStyle} />
      <div css={profileStyle}>
        <div css={topLeftStyle}>
          <header css={headerStyle}>
            <section className="pokemon-image" css={imageStyle}>
              <If condition={!isCatched}>
                <Image
                  className="image"
                  src={profileImage}
                  alt={name}
                  width={200}
                  height={200}
                />
              </If>
              <If condition={!isCatched}>
                <Pokeball size={12.5} />
              </If>
              <span className="shadow"></span>
            </section>
            <section className="pokemon-add">
              <PokemonAdd pokemon={pokemon} />
            </section>
            <section className="pokemon-name" css={sectionRowStyle}>
              <span css={headingStyle}>
                {`#${String(id).padStart(3, "0")}`}
              </span>
              <Heading level={1} css={headingStyle}>
                {name}
              </Heading>
            </section>
          </header>
          <main css={mainStyle}>
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
          </main>
        </div>
        <Card
          css={cardStyle}
          cssContent={cardContentStyle}
          withBorder
          withShadow
        >
          <div css={columnStyle}>
            <section className="pokemon-experience" css={sectionRowStyle}>
              <Heading level={2} css={headingStyle}>
                Base Experience
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
        </Card>
      </div>
    </If>
  )
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonDetails
