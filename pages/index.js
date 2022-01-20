import Head from "next/head"
import Image from "next/image"
import PokemonList from "../components/pokemon-list"
import client from "../graphql/client"
import { OPTIONS } from "../graphql/constants"
import { GET_POKEMONS } from "../graphql/query"
import logo from "../public/logo.png"

const Home = () => (
  <div>
    <Head>
      <title>Pokepedia</title>
      <meta
        name="description"
        content="Managed and distributed by Oak Pokémon Research Lab"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Hello, Pokepedia!</h1>
    <div>
      <header>
        <Image src={logo} alt="Pokepedia logo" />
      </header>
      <main>
        <PokemonList pokemons={pokemons} />
      </main>
    </div>
  </div>
)

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: OPTIONS,
  })

  return {
    props: {
      pokemons: data.pokemons.results,
    },
  }
}

export default Home
