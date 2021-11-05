import React from 'react';

// Components
import Home from './commponents/Home';
import Header from './commponents/Header/Header';

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
