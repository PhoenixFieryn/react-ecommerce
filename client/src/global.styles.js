import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat';
        font-weight: 400;
        padding: 1.5rem 4rem;

        @media screen and (max-width: 800px) {
            padding: 0.7rem;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;
