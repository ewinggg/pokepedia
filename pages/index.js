import Head from "next/head"

export default function Home() {
  return (
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
    </div>
  )
}
