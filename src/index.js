import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Root from './Components/Root/Root.js'
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri :'https://abackendstrapi.herokuapp.com/graphql',
  cache: new InMemoryCache()
})



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Root></Root>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
