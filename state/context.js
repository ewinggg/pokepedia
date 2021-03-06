import { createContext, useContext, useEffect, useReducer } from "react"
import appReducer from "./reducer"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    isAmp: false,
    isCatched: false,
    isDialogOpen: false,
    ownedPokemons: [],
    selectedPokemon: null,
  }

  // Create persisted state
  const isClient = typeof window !== "undefined"
  const cachedState = isClient ? localStorage.getItem("pokepedia-state") : null
  const localState = JSON.parse(cachedState)

  const [state, dispatch] = useReducer(appReducer, localState || initialState)

  useEffect(() => {
    localStorage.setItem("pokepedia-state", JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }

  return context
}

export { AppProvider, useAppContext }
