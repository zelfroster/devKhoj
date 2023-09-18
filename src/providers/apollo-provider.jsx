'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.PERSONAL_ACCESS_TOKEN}`,
  },
});

export default function ApolloProviderClient({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
