import * as React from 'react';
import styled from 'styled-components';


const Hero = () => {
  const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin: 5em;
  `

  const Header = styled.div`
    font-size: 100px;
    font-weight: 600;
    color: #ccd6f6;
  `;
  return (
    <HeroContainer>
      <h4>Hi, my name is</h4>
      <Header>Jeremy Lee</Header>
    </ HeroContainer>
  )
}

export default Hero;