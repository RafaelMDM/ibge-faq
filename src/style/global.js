import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, ${({ appContainer }) => appContainer} {
    height: 100%;
    width: 100%;
  }

  body {
    background: #ededed;
    margin: 0;
  }
`;
