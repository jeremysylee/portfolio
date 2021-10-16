import * as React from 'react';
import styled from 'styled-components';


const Hero = () => {
  const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    margin: 5em;
  `

  const Header = styled.div`
    font-size: 100px;
    font-weight: 600;
    color: #ccd6f6;
    font-family: SF Mono, sans-serif;
    font-weight: 400;
    letter-spacing: 19px;
    color: #CB5151;
    margin-left: -10px;
  `;

  const H2 = styled.div`
    font-family: Roboto Light;
    color: white;
    font-size: 36px;
    letter-spacing: 8px;
  `;

  const H3 = styled(H2)`
    font-size: 24px;
    letter-spacing: 3px;
  `;

  return (
    <HeroContainer>
      <H3>Hello, my name is</H3>
      <Header>JEREMY LEE</Header>
      <H2>I'm a fullstack software engineer</H2>
    </ HeroContainer>
  )
}

export default Hero;