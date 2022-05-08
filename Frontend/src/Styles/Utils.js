import { createGlobalStyle } from 'styled-components'

export const UtilityStyles = createGlobalStyle`
    * {
        box-sizing  : border-box;
        outline     : none;
    }
    html,
    body{
        margin: 0;
        padding: 0;
    }
    body{
        background-color    : #FFFFFF;
        line-height         : 1.2;
        min-height          : 100vh;
        position            : relative;
    }
    .flex {
        display: flex;
    }
`;
