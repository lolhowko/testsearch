import styled from "styled-components"

export const OrderDiv = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`

export const OrderTitle = styled.h3`

`

export const OrderButton = styled.button`
border-top: none;
border-right: none;
border-left: none;
    border-bottom: ${props => props.chosen ? "1px solid grey" : "1px dashed lightgrey"} ;
    background-color: white;
    cursor: pointer;

    &:hover {
        transform: scale(1.03);
    }
`