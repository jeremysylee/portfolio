import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SF Pro';
  src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff) format('woff');
}
  body {
    background-color: #0a182f;
    color: white;
    font-family: Calibre;
  }
`;

export default GlobalStyle;