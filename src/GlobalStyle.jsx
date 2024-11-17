import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
:root {
    --color-text: rgba(255, 255, 255, 0.75);
}

body{
    color: var(--color-text);
    /* padding: 3% 0 0 5%; */
}
`;
