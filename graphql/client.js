import { ApolloClient, InMemoryCache } from "@apollo/client"
import { URI } from "./constants"

const client = new ApolloClient({ uri: URI, cache: new InMemoryCache() })

export default client
