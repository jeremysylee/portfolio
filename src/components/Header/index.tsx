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
    <div style={{ margin: '10px' }}></div>
    <span>Projects</span>
    <div style={{ margin: '10px' }}></div>
    <span>Resume</span>
  </HeaderContainer>
)

export default Header;