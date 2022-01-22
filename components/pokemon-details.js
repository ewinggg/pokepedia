/** @jsxImportSource @emotion/react */

import Image from "next/image"
import PropTypes from "prop-types"
import Card from "./card"
import Heading from "../components/heading"
import If from "./if"
import { css, Global } from "@emotion/react"
import media from "../styles/media"
import PokemonStatList from "./pokemon-stat-list"
import PokemonTypeList from "./pokemon-type-list"
import useColors from "../hooks/useColors"

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const rowStyle = css`
  display: flex;
  flex-direction: row;
  gap: 25px;
`

const sectionColumnStyle = css`
  ${columnStyle}
  gap: 15px;
`

const sectionRowStyle = css`
  ${rowStyle}
  align-items: center;
  gap: 15px;
`

const detailsStyle = css`
  ${columnStyle}
  gap: 25px;
  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const headingStyle = css`
  font-size: 25px;
`

const textStyle = css`
  font-weight: 500;
  text-transform: lowercase;
`

const cardStyle = css`
  padding: 50px;
  transform: skew(-5deg);
`

const cardContentStyle = css`
  ${columnStyle}
  transform: skew(5deg);
`

const mainStyle = css`
  ${columnStyle}
  gap: 10px;
`

const imageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const PokemonDetails = ({ pokemon }) => {
  const {
    id,
    img,
    name,
    height,
    weight,
    base_experience,
    stats,
    sprites,
    types,
  } = pokemon
  const profileImage = img ?? sprites.front_default

  // Get random color based on pokemon id
  const flag = id % 3
  const { light } = useColors(flag)

  // Set body color dynamically based on pokemon id
  const bodyStyle = css`
    body {
      background-color: ${light};
    }
  `

  console.log("pokemon", pokemon)

  return (
    <If condition={pokemon && typeof pokemon === "object"}>
      <Global styles={bodyStyle} />
      <div css={detailsStyle}>
        <div css={columnStyle}>
          <header css={columnStyle}>
            <section className="pokemon-image" css={imageStyle}>
              <Image src={profileImage} alt={name} width={200} height={200} />
              <span className="shadow"></span>
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
        <div>
          <Card
            css={cardStyle}
            cssContent={cardContentStyle}
            withBorder
            withShadow
          >
            <section className="pokemon-experience" css={sectionRowStyle}>
              <Heading level={2} css={headingStyle}>
                Base Experience
                <span css={textStyle}>{`(${base_experience})`}</span>
              </Heading>
            </section>
            <section className="pokemon-stats" css={sectionColumnStyle}>
              <Heading level={2} css={headingStyle}>
                Stats
              </Heading>
              <PokemonStatList pokemonStats={stats} />
            </section>
          </Card>
        </div>
      </div>
    </If>
  )
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonDetails
