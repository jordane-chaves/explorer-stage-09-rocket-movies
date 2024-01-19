import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray_950};
  }
  
  body, button, input, textarea {
    color: ${({ theme }) => theme.colors.text_100};
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    line-height: 1.4;
    
    outline: none;
  }

  a {
    text-decoration: none;
  }

  a, button, label {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover, label:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 9999px;
  }
`
