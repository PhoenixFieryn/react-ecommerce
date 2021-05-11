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

    .screenreader-text {
        position: absolute;
        left: -999px;
        width:1px;
        height: 1px;
        top: auto;

        &:focus {
            color: $background-color;
            display: inline-block;
            height: auto;
            width: auto;
            position: static;
            margin: auto;
        }
    }
`;
