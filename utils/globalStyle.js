import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`

${fonts
  .map((font) => {
    return `
      @font-face {
        font-family: 'Inter';
        src: url("/vendors/fonts/${font.otf}") format('opentype');
        font-weight: ${font.weight};
      }`;
  })
  .join(' ')}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #0c0c0c;
}

body {
  font-family: "Inter";
  font-weight: 400;
}

::selection {
  background-color: #00cd0e8a;
  color: #fff;
}

html {
  font-size: 62.5%;
}


@media (max-width: 1440px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 1024px) {
  html {
    font-size: 48%;
  }
}

@media (max-width: 750px) {
  html {
    font-size: 45%;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 34%;
  }
}

@media (max-width: 320px) {
  html {
    font-size: 32%;
  }
}

a {
  text-decoration: none;
}

`;

export default GlobalStyle;
