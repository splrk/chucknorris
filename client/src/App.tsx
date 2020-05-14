import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ThemeProvider } from 'styled-components';
import { ContextProvider } from './Context';
import Home from './components/Home';
import theme from './theme';

const client = new ApolloClient({
  uri: `${window.location.protocol}://${window.location.hostname}:${window.location.port}`,
});

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <div className="App">
            <header className="App-header">Chuck Norris Jokes</header>
            <Home />
          </div>
        </ContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
