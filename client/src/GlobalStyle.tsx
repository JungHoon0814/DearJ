import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
    font-family: "pretendard", sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: -1px;
    font-size: 18px;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  body{
    height:100%;
    font-size: 1rem;
    color: rgba(79, 79, 79, 1);
  }
`;

export default GlobalStyle;
