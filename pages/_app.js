import { ApolloProvider } from "@apollo/client"
import client from "../graphql/client"
import { Global } from "@emotion/react"
import Layout from "../components/layout"
import { AppProvider } from "../state/context"
import globalStyles from "../styles/global-styles"

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <AppProvider>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  </ApolloProvider>
)

export default App
