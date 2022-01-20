import { ApolloProvider } from "@apollo/client"
import client from "../graphql/client"
import { Global } from "@emotion/react"
import globalStyles from "../styles/global-styles"

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
