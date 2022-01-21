import Head from "next/head"
import PokemonList from "../components/pokemon-list"
import client from "../graphql/client"
import { VARIABLES as variables } from "../graphql/constants"
import { GET_POKEMONS } from "../graphql/query"
import useInfiniteScroll from "../hooks/useInfiniteScroll"
import usePokemons from "../hooks/usePokemons"

const Home = ({ initialPokemons }) => {
  const { pokemons, getPokemons } = usePokemons(initialPokemons)
  useInfiniteScroll(getPokemons)

  return (
    <>
      <Head>
        <title>Pokepedia</title>
        <meta
          name="description"
          content="Managed and distributed by Oak Pokémon Research Lab"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({ query: GET_POKEMONS, variables })

  return {
    props: {
      initialPokemons: data.pokemons.results,
    },
  }
}

export default Home
