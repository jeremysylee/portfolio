import * as React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 3em 5em;
`;

const Header = () => (
  <HeaderContainer>
    <span>Home</span>
    <span>Projects</span>
    <span>Resume</span>
  </HeaderContainer>
)

export default Header;