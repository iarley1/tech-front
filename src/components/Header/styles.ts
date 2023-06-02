import styled from "styled-components";

export const StyleHeader = styled.header `
     display: flex;
     flex-direction: row;
     width: 100%;
     height: 100px;

     div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
     }

     div > h1 {
        color:  var(--color-white-fixed);
     }

     div > button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 38.5px;
        background-color: var(--color-grey-4);
        border: 1px solid var(--color-grey-4);
        border-radius: 4px;
        font-weight: 600;
        font-size: 12.8px;
        color: var(--color-white-fixed);
        line-height: 21px;
        cursor: pointer;
     }
`