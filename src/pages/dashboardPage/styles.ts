import styled from "styled-components";

export const StyleDashboardPage = styled.main `
     display: flex;
     flex-direction: column;
     width: 100%;
     height: 100vh;
     padding: 0 10%;
     background-color: var(--color-grey-3);

     hr {
        color: var(--color-grey-1);
        width: 100%;
        position:  absolute;
        left: 0;
        top: 95px;
     }

     .contacts {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
     }

     .contacts > h2 {
        color: var(--color-white-fixed);
        font-size: 28px;
     }

     .contacts > button {
        color: var(--color-white-fixed);
        background-color: var(--color-grey-4);
        border: none;
        border-radius: 5px;
        width: 40px;
        height: 40px;
        font-size: 25px;
        font-weight: 600;
        cursor: pointer;
     }

     .no_contact {
        margin: 0 auto;
        color: var(--color-white-fixed);
        margin-top: 50px;
     }

     ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        max-height: 60%;
        overflow-x: auto;
        padding: 20px;
        background-color: var(--color-grey-1);
        margin-top: 25px;
     }

     ul::-webkit-scrollbar{
        width: 10px;
     }

     ul::-webkit-scrollbar-thumb{
        background-color: var(--color-grey-4);
        border-radius: 5px;
     }
`