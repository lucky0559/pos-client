import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://172.24.31.22:3000/graphql",
  cache: new InMemoryCache()
});
