import { createGlobalStyle } from 'styled-components';
import { mainTheme } from './theme';

const {
	typography,
	colors: { primary, secondary, tertiary },
} = mainTheme;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${typography.primary};
    color: ${primary.main};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior: contain;
    background-color: ${tertiary.main};
    padding: 20px ;
  }

  a,
  button {
    -webkit-tap-highlight-color: transparent;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active
  {
    box-shadow: 0 0 0 30px ${tertiary.main} inset !important;
    -webkit-box-shadow: 0 0 0 30px ${tertiary.main} inset !important;
    background-clip: content-box !important;
    -webkit-text-fill-color: ${secondary.main} !important;
  }
`;

export default GlobalStyle;
