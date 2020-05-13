import React from 'react'
import { ContextProvider } from './Context';
import Home from './components/Home';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">
          Chuck Norris Jokes
        </header>
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
