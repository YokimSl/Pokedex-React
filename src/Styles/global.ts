import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {    
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
}

main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DADFE8;
}

`;