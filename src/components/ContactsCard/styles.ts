import styled from "styled-components";

export const StyleCard = styled.li `
     display: flex;
     flex-direction: column;
     gap: 8px;
     background-color: var(--color-grey-3);
     padding: 15px 25px;
     cursor: pointer;

     div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        justify-content: space-between;
     }

     div > h2 {
        font-size: 18px;
        color: var(--color-white-fixed);
     }

     p {
        font-size: 14px;
        color: var(--color-white-fixed);
     }

     .number {
       min-width: 120px;
     }

     @media (min-width: 408px) {
        flex-direction: row;
        align-items: center;
    }
`