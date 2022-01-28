import { useAmp } from "next/amp"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useEffect } from "react"
import If from "../components/if"
import PokemonList from "../components/pokemon-list"
import client from "../graphql/client"
import { VARIABLES as variables } from "../graphql/constants"
import { GET_POKEMONS } from "../graphql/query"
import useInfiniteScroll from "../hooks/useInfiniteScroll"
import { checkAmp } from "../state/actions"
import { useAppContext } from "../state/context"
import usePokemons from "../hooks/usePokemons"

const Loading = dynamic(() => import("../components/loading"))
const MessageBox = dynamic(() => import("../components/message-box"))

// AMP configuration
export const config = { amp: "hybrid" }

const Pokemons = ({ initialPokemons, totalPokemons }) => {
  const isAmp = useAmp()
  const { dispatch } = useAppContext()
  useEffect(() => dispatch(checkAmp(isAmp)), [])

  // Set initial pokemons data from the server
  // and fetch another pokemons data in the client
  const data = usePokemons(initialPokemons)
  const { loading, error, pokemons, getPokemons } = data

  // Fetch another pokemons data in the client on scroll
  useInfiniteScroll(pokemons, totalPokemons, getPokemons)

  return (
    <>
      <Head>
        <title>Pokepedia</title>
        <meta
          name="description"
          content="Managed and distributed by Oak Pokémon Research Lab"
        />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no"
        ></meta>
      </Head>
      <If condition={typeof error !== "undefined"}>
        <MessageBox message={`Error! ${error?.message}`} />
      </If>
      <If condition={typeof error === "undefined"}>
        <PokemonList pokemons={pokemons} />
        <If condition={loading}>
          <Loading />
        </If>
      </If>
    </>
  )
}

export const getServerSideProps = async () => {
  // Get initial pokemons data in the server
  const { data } = await client.query({ query: GET_POKEMONS, variables })

  return {
    props: {
      initialPokemons: data.pokemons.results,
      totalPokemons: data.pokemons.count,
    },
  }
}
export default Pokemons
