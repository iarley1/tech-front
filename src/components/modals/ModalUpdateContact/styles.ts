import styled from "styled-components";

export const StyledModalUpdate = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    left: 0;
    padding: 0 20px;

    .modal-box {
        display: flex;
        flex-direction: column;
        background-color: var(--color-grey-3);
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        padding: 30px;
        position: absolute;
        top: 170px;
        max-width: 100%;
    }

    .modal-box header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    .header-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 0 20px;
        background-color: var(--color-grey-2);
    }

    .header-div h3 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-grey-0);
    }

    .header-div button {
        color: var(--color-white-fixed);
        background-color: var(--color-grey-4);
        border-radius: 7px;
        border: none;
        font-weight: 700;
        padding: 7px 10px;
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        gap: 20px;
    }

    form > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    form div > label {
        font-size: 17px;
        font-weight: 500;
        color: var(--color-white-fixed);
    }

    form div > input {
        border-radius: 5px;
        border: 1px solid;
        height: 30px;
        outline: 0;
        padding: 10px;
    }
    .buttons > button:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        background-color: var(--color-grey-4); 
        border: 1.2182px solid var(--color-grey-4);
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: var(--color-white-fixed);
        cursor: pointer;
    }

    .buttons > button:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        background-color: var(--color-grey-4); 
        border: 1.2182px solid var(--color-grey-4);
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: var(--color-negative);
        cursor: pointer;
    }

    p {
        font-size: 15px;
        color: #FF0000;
    }
`