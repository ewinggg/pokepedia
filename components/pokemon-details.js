/** @jsxImportSource @emotion/react */

import Image from "next/image"
import PropTypes from "prop-types"
import Heading from "../components/heading"
import If from "./if"
import { css, Global } from "@emotion/react"
import media from "../styles/media"
import PokemonTypeList from "./pokemon-type-list"
import useColors from "../hooks/useColors"

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const sectionStyle = css`
  display: flex;
  align-items: center;
  gap: 15px;
`

const headingStyle = css`
  font-size: 25px;
`

const detailsStyle = css`
  display: flex;
  flex-direction: column;
  ${media.md} {
    flex-direction: row;
  }
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
  const { id, img, name, sprites, types } = pokemon
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
        <div className="profile" css={columnStyle}>
          <header css={columnStyle}>
            <section className="pokemon-image" css={imageStyle}>
              <Image src={profileImage} alt={name} width={200} height={200} />
              <span className="shadow"></span>
            </section>
            <section className="pokemon-name" css={sectionStyle}>
              <span css={headingStyle}>
                {`#${String(id).padStart(3, "0")}`}
              </span>
              <Heading level={1} css={headingStyle}>
                {name}
              </Heading>
            </section>
          </header>
          <main>
            <section className="pokemon-type" css={sectionStyle}>
              <Heading level={2}>Type :</Heading>
              <PokemonTypeList pokemonTypes={types} />
            </section>
          </main>
        </div>
        <div className="stats">stats</div>
      </div>
    </If>
  )
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonDetails
