import { CATCH_POKEMON, TOGGLE_DIALOG } from "./action-types"

export const catchPokemon = (isCatched) => ({
  type: CATCH_POKEMON,
  payload: isCatched,
})

export const toggleDialog = () => ({
  type: TOGGLE_DIALOG,
})
