import { ApolloProvider } from "@apollo/client"
import client from "../graphql/client"
import { Global } from "@emotion/react"
import Layout from "../components/layout"
import globalStyles from "../styles/global-styles"

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Global styles={globalStyles} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
)

export default App
