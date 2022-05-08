import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
    .title-wrapper {
        justify-content : space-between;
        margin-bottom:5%;
    }
    .actions {
        justify-content : space-between;
        width:25%
    }
    .search {
        float: left;
        width: 30%;
    }
    .action-item {
        display:none
            }
    .container:hover {
        // background-color:red;
        .action-item {
    display:block
        }
    }
`;

export const ContentWrapper = styled.div`
padding:10px;
margin-top: 20px;
grid-area: 1 / 1;
border: 2px solid black;
display:flex;
justify-content:space-between;
span {
padding: 20px;
width: 50%;
}
`;

export const DetailWrapper = styled.div`
display:flex;
flex-wrap: wrap;
width: 80%;
`;