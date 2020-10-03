import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";

import { InMemoryCache } from "apollo-cache-inmemory";

import { createHttpLink } from "apollo-link-http";

import { ApolloProvider } from "react-apollo";

import { ApolloLink } from "apollo-boost";

import { onError } from "apollo-link-error";
const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
}); //console log nếu như có lỗi từ Queries

const httpLink = createHttpLink({
  uri: "http://system.mediagreat.net:1337/graphql",
}); //tạo httpLink kết nối Apollo với GraphQL API

const client = new ApolloClient({
  cache,

  link: ApolloLink.from([errorLink, httpLink]),
}); // instantiate ApolloClient bằng cách passing link và cach
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, //App được bọc bởi hoc ApolloProvider, client là prop

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
