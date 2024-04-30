import styled from "styled-components";

const modileWidth = "620px";

export const OrderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: ${modileWidth}) {
    flex-direction: column;
  }
`;

export const OrderTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  @media screen and (max-width: ${modileWidth}) {
    font-weight: 300;
    font-size: 12px;
  }
`;

export const OrderButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;

export const OrderButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: ${(props) =>
    props.chosen ? "1px solid grey" : "1px dashed lightgrey"};
  background-color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    background-color: #009ee4;
  }

  &:active {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${modileWidth}) {
    font-weight: 300;
    font-size: 12px;
  }
`;
