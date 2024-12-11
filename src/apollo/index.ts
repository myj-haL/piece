import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { WebSocketLink } from '@apollo/client/link/ws';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

// const httpLink = new HttpLink({
//   uri: "http://localhost:4000/graphql",
//   credentials: "same-origin",
// });

// const wsLink = new WebSocketLink({
//   uri: "ws://localhost:4000/subscriptions",
//   options: {
//     lazy: true,
//     reconnect: true,
//     // connectionParams: {
//     //   token: 'ㄴㄴㄴㄴㄴㄴ',
//     // },
//   },
// });
// const applicationLink = ApolloLink.split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink
//   // tokenLink.concat(httpLink)
// );
// export const client = new ApolloClient({
//   link: typeof window === "undefined" ? httpLink : applicationLink,
//   cache: new InMemoryCache(),
// });
// // client.setLink(applicationLink);
// // client.cache.reset();
const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
});
const wsLink = () => {
    const link = new WebSocketLink({
        uri: 'ws://localhost:4000/subscriptions',
        options: {
            lazy: true,
            reconnect: true,
        },
    });
    return ApolloLink.split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        link,
        httpLink
    );
};

export const client = new ApolloClient({
    //   uri: "http://localhost:4000/graphql",
    link: typeof window === 'object' ? wsLink() : httpLink,
    credentials: 'include',
    cache: new InMemoryCache(),
});
