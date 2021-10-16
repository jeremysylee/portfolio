import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './App.styles';
import Header from './Header';
import Hero from './Hero'

const AppContainer = styled.div`
  height: 100%;
`;
const App = () => {

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Hero />
    </ AppContainer>
  )
}

export default App;