import * as React from 'react';
import styled from 'styled-components';


const SplashPage = () => {
  const PageContainer = styled.div`
    height: 100px;
    background-color: red;
  `

  return (
    <div>
      <div>Landing Page</div>
      <PageContainer></PageContainer>
    </div>
  )
}

export default SplashPage;