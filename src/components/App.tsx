import React from 'react';
import styled from 'styled-components';
import Hero from './Hero'
import GlobalStyle from './App.styles';

const AppContainer = styled.div`
  height: 100%;
`;
const App = () => {

  return (
    <AppContainer>
      <GlobalStyle />
        <div>Portfolio</div>
      <Hero />
    </ AppContainer>
  )
}

export default App;