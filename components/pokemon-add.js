/** @jsxImportSource @emotion/react */

import dynamic from "next/dynamic"
import Image from "next/image"
import PropTypes from "prop-types"
import { useState } from "react"
import If from "./if"
import Pokeball from "./pokeball"
import useCachedImage from "../hooks/useCachedImage"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"
import media from "../styles/media"
import {
  borderRadius,
  buttonLabelStyle,
  buttonStyle,
  headingStyle,
  sectionStyle,
  thinBorderStyle,
} from "../styles/shared"

const inputHeadingStyle = css`
  text-transform: unset;
`

const errorStyle = css`
  border: 2px solid var(--light-red);
`

const inputStyle = css`
  ${thinBorderStyle}
  ${borderRadius}
  height: 35px;
  padding: 0 15px;
  & input {
    ${borderRadius}
    border: none;
    height: 100%;
    font-size: 20px;
    font-weight: 700;
    max-width: 183px;
    ${media.sm} {
      max-width: unset;
    }
  }
  & input:focus {
    outline: none;
  }
`

const Dialog = dynamic(() => import("./dialog"), { ssr: false })
const Heading = dynamic(() => import("./heading"), { ssr: false })

const PokemonAdd = ({ pokemon }) => {
  const { isDialogOpen, isCatched, ownedPokemons, dispatch } = useAppContext()

  // Get pokemon image from cached or request
  const initialImage = pokemon.image
  const cachedImage = useCachedImage(pokemon.name, initialImage)
  const image = cachedImage ?? pokemon.sprites.front_default

  // State for storing nickname and its error message
  const [nickname, setNickname] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Set nickname based on user input
  const handleNickname = (event) => {
    const name = event.target.value
    setNickname(name)
  }

  // Submit an action on enter in the text field
  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleAdopt()
  }

  const handleAdopt = async () => {
    // Find out existing pokemon in store
    const isAdoptedPokemon = (nickname) => {
      const findPokemon = (pokemon) => {
        return pokemon.nickname.toLowerCase() === nickname.toLowerCase()
      }
      const pokemon = ownedPokemons.find(findPokemon)
      const isAdopted = typeof pokemon !== "undefined"

      return isAdopted
    }

    // Check wether the pokemon is already owned with the same nickname
    const isAdopted = isAdoptedPokemon(nickname)

    // Adopt new pokemon
    if (!isAdopted && nickname) {
      const { adoptPokemon } = await import("../state/actions")
      const newPokemon = { ...pokemon, image, nickname }
      dispatch(adoptPokemon(newPokemon))
      handleClose()

      return
    }

    if (!nickname) {
      setErrorMessage("The nickname can't be empty")
      return
    }

    // Otherwise, set error message
    setErrorMessage("This nickname is already taken!")
  }

  // Handle click for catching pokemon
  const handleCatch = async () => {
    // Probability/Success rate to get pokemon
    const probability = (number) => Math.random() <= number
    const isCatched = probability(0.5)

    const { catchPokemon, toggleDialog } = await import("../state/actions")
    dispatch(catchPokemon(isCatched))
    dispatch(toggleDialog())
  }

  // Handle close dialog
  const handleClose = async () => {
    setNickname("")
    setErrorMessage("")

    const { catchPokemon, toggleDialog } = await import("../state/actions")
    dispatch(catchPokemon(false))
    dispatch(toggleDialog())
  }

  return (
    <>
      <button data-testid="add" css={buttonStyle} onClick={handleCatch}>
        <span css={buttonLabelStyle}>
          <Pokeball /> Catch
        </span>
      </button>
      <Dialog
        open={isDialogOpen}
        onCancel={handleClose}
        cancelText="Release"
        onConfirm={handleAdopt}
        confirmText="Adopt"
        withButtons={isCatched}
      >
        <If condition={!isCatched}>
          <Heading level={1} css={headingStyle}>
            Pokémon runs away!
          </Heading>
        </If>
        <If condition={isCatched}>
          <Heading level={1} css={headingStyle}>
            You got the Pokémon!
          </Heading>
          <section css={sectionStyle}>
            <Image src={image} alt={pokemon.name} width={100} height={100} />
            <Heading level={2}>
              {`${nickname ? nickname + " The " : ""} ${pokemon.name}`}
            </Heading>
          </section>
          <section css={sectionStyle}>
            <Heading level={3} css={inputHeadingStyle}>
              <If condition={errorMessage === ""}>
                Give your new Pokémon a nickname!
              </If>
              <If condition={errorMessage !== ""}>{errorMessage}</If>
            </Heading>
            <div css={[inputStyle, errorMessage && errorStyle]}>
              <input
                value={nickname}
                onChange={handleNickname}
                autoFocus
                maxLength={15}
                onKeyDown={handleKeyDown}
              />
            </div>
          </section>
        </If>
      </Dialog>
    </>
  )
}

PokemonAdd.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default PokemonAdd
