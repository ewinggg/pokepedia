import {
  ADOPT_POKEMON,
  CATCH_POKEMON,
  RELEASE_POKEMON,
  SELECT_POKEMON,
  TOGGLE_DIALOG,
} from "./action-types"

export const adoptPokemon = (pokemon) => ({
  type: ADOPT_POKEMON,
  payload: pokemon,
})

export const catchPokemon = (isCatched) => ({
  type: CATCH_POKEMON,
  payload: isCatched,
})

export const releasePokemon = (pokemon) => ({
  type: RELEASE_POKEMON,
  payload: pokemon,
})

export const selectPokemon = (pokemon) => ({
  type: SELECT_POKEMON,
  payload: pokemon,
})

export const toggleDialog = () => ({
  type: TOGGLE_DIALOG,
})
