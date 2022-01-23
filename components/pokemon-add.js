import Image from "next/image"
import PropTypes from "prop-types"
import { useState } from "react"
import Heading from "./heading"
import If from "./if"
import Dialog from "./dialog"
import useCachedImage from "../hooks/useCachedImage"
import { adoptPokemon, catchPokemon, toggleDialog } from "../state/actions"
import { useAppContext } from "../state/context"
import { css } from "@emotion/react"
import {
  bigTextStyle,
  borderRadius,
  buttonLabelStyle,
  buttonStyle,
  flexCenterStyle,
  thinBorderStyle,
} from "../styles/shared"

const inputHeadingStyle = css`
  text-transform: unset;
`

const errorStyle = css`
  border: 2px solid red;
`

const headingStyle = css`
  ${bigTextStyle}
  font-weight: 700;
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
  }
  & input:focus {
    outline: none;
  }
`

const sectionStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 15px;
`

const PokemonAdd = ({ pokemon }) => {
  const { dialogOpen, isCatched, ownedPokemons, dispatch } = useAppContext()

  // Get pokemon image from cached or request
  const initialImage = pokemon.image
  const cachedImage = useCachedImage(pokemon.name, initialImage)
  const image = cachedImage ?? pokemon.sprites.front_default

  // State for storing nickname and its error message
  const [nickname, setNickname] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Find out existing pokemon in store
  const isAdoptedPokemon = (nickname) => {
    const findPokemon = (pokemon) => pokemon.nickname === nickname
    const pokemon = ownedPokemons.find(findPokemon)
    const isAdopted = typeof pokemon !== "undefined"

    return isAdopted
  }

  // Set nickname based on user input
  const handleNickname = (event) => {
    const name = event.target.value
    setNickname(name)
  }

  const handleAdopt = () => {
    // Check wether the pokemon is already owned with the same nickname
    const isAdopted = isAdoptedPokemon(nickname)

    // Adopt new pokemon
    if (!isAdopted && nickname) {
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
  const handleCatch = () => {
    // Probability/Success rate
    const probability = (number) => Math.random() <= number
    const isCatched = probability(0.5)

    dispatch(catchPokemon(isCatched))
    dispatch(toggleDialog())
  }

  // Handle close dialog
  const handleClose = () => {
    setNickname("")
    setErrorMessage("")
    dispatch(catchPokemon(false))
    dispatch(toggleDialog())
  }

  console.log("ownedPokemons", ownedPokemons)
  console.log("errorMessage", errorMessage)

  return (
    <>
      <button css={buttonStyle} onClick={handleCatch}>
        <span css={buttonLabelStyle}>Catch Pokémon</span>
      </button>
      <Dialog
        open={dialogOpen}
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
              <input value={nickname} onChange={handleNickname} autoFocus />
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
