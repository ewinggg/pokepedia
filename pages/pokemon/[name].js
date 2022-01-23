import Head from "next/head"
import If from "../../components/if"
import PokemonDetails from "../../components/pokemon-details"
import client from "../../graphql/client"
import { GET_POKEMON } from "../../graphql/query"
import useMounted from "../../hooks/useMounted"

const Pokemon = ({ pokemon }) => {
  const mounted = useMounted()

  return (
    <>
      <Head>
        <title>{`${pokemon.name}'s Profile`}</title>
        <meta
          name="description"
          content={`The complete information about ${pokemon.name}`}
        />
      </Head>
      {/* Ensure the nodes are rendered once mounted */}
      <If condition={mounted}>
        <PokemonDetails pokemon={pokemon} />
      </If>
    </>
  )
}

export const getServerSideProps = async (context) => {
  // Get pokemon name from context
  const { name, image } = context.query

  // Get pokemon data in the server
  const { data } = await client.query({
    query: GET_POKEMON,
    variables: { name },
  })

  // Add a new `image` property to get Image from home page
  const modifiedPokemon = { ...data.pokemon, image: image ?? null }

  return {
    props: {
      pokemon: modifiedPokemon,
    },
  }
}

export default Pokemon
