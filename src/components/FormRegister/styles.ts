import styled from "styled-components";

export const StyleRegisterForm = styled.form `
    display: flex;
    background-color: var(--color-grey-2);
    flex-direction: column;
    width: 400px;
    padding: 30px;
    justify-content: center;
    gap: 20px;
    border-radius: 8px;

    h1 {
        color: white;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div > label {
        font-size: 17px;
        font-weight: 500;
        color: var(--color-white-fixed);
    }

    div > input {
        border-radius: 5px;
        border: 1px solid;
        height: 30px;
        outline: 0;
        padding: 10px;
    }

    p {
        font-size: 15px;
        color: #FF0000;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 38.5px;
        background-color: var(--color-grey-3);
        border: 1px solid var(--color-grey-3);
        border-radius: 4px;
        margin-top: 10px;
        font-weight: 500;
        font-size: 12.8px;
        color: var(--color-white-fixed);
        line-height: 21px;
        cursor: pointer;
    }
`