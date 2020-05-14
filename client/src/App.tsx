import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ContextProvider } from './Context';
import Home from './components/Home';

const client = new ApolloClient({
  uri: `${window.location.protocol}://${window.location.hostname}:${window.location.port}`,
});

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <div className="App">
          <header className="App-header">Chuck Norris Jokes</header>
          <Home />
        </div>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default App;
