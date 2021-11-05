import React from 'react';

// Components
import Home from './components/Home';
import Header from './components/Header/Header';

import { GlobalStyle } from './GlobalStyle'


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
