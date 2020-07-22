import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import Header from './Components/Header';
import HomeLoan from './Components/HomeLoan';
import Body from './Components/Body';
import store from './store.js'






function App() {
  return (
    <div className="App">
      <Header/>
    <Body/>
    </div>
  );
}

export default App;
