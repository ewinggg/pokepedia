import Dialog from "./dialog"
import Heading from "./heading"
import PropTypes from "prop-types"
import If from "./if"
import List from "./list"
import PokemonItem from "./pokemon-item"
import { css } from "@emotion/react"
import media from "../styles/media"
import { releasePokemon, toggleDialog } from "../state/actions"
import { useAppContext } from "../state/context"
import { bigTextStyle } from "../styles/shared"

const headingStyle = css`
  ${bigTextStyle}
  font-weight: 700;
  text-align: center;
`

const listStyle = css`
  ${media.sm} {
    justify-content: space-between;
  }
`

const PokemonList = ({ pokemons }) => {
  const { dialogOpen, selectedPokemon, dispatch } = useAppContext()

  // Handle close dialog
  const handleClose = (event) => {
    event.preventDefault()

    dispatch(toggleDialog())
  }

  const handleRelease = (event) => {
    event.preventDefault()

    dispatch(releasePokemon(selectedPokemon))
    dispatch(toggleDialog())
  }

  return (
    <If condition={pokemons?.length > 0}>
      <List css={listStyle}>
        {
          // Iterate each pokemon from pokemons
          pokemons?.map((pokemon) => (
            <PokemonItem
              pokemon={pokemon}
              key={pokemon.nickname ?? pokemon.id}
            />
          ))
        }
      </List>
      <Dialog
        open={dialogOpen}
        onCancel={handleClose}
        cancelText="Keep"
        onConfirm={handleRelease}
        confirmText="Release"
      >
        <Heading level={1} css={headingStyle}>
          Are you sure to release this adorable Képomon?
        </Heading>
      </Dialog>
    </If>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
}

export default PokemonList
