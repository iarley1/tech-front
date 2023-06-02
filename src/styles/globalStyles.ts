import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --color-grey-0: #f8f9fa;
        --color-grey-1: #868e96;
        --color-grey-2: #343b41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;
        --color-white-fixed: #ffffff;

        --color-sucess: #3fe864;
        --color-negative: #e83f5b;
    }

    .spinner {
        width: 25px;
        height: 25px;
        border: 4px solid;
        border-radius: 50%;
        border-color: black #e6e6e6 #e6e6e6 #e6e6e6;
        animation: loading 0.3s infinite;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`