/** @jsxImportSource @emotion/react */

import Image from "next/image"
import PropTypes from "prop-types"
import Heading from "../components/heading"
import If from "./if"
import { css } from "@emotion/react"
import media from "../styles/media"

const baseDetailsStyle = css`
  display: flex;
  flex-direction: column;
  ${media.md} {
    flex-direction: row;
  }
`

const baseImageStyle = css`
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
  console.log("pokemon", pokemon)

  const profileImage = pokemon.img ?? pokemon.sprites.front_default

  return (
    <If condition={pokemon && typeof pokemon === "object"}>
      <div css={baseDetailsStyle}>
        <div className="profile">
          <div>
            <div css={baseImageStyle}>
              <Image
                src={profileImage}
                alt={pokemon.name}
                width={200}
                height={200}
              />
              <span className="shadow"></span>
            </div>
            <div>
              <span>{`#${String(pokemon.id).padStart(3, "0")}`}</span>
              <Heading level={1}>{pokemon.name}</Heading>
            </div>
          </div>
          <div>tes</div>
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
