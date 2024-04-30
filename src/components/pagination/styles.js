import styled from "styled-components";

export const PageCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`;

export const PageCountText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const PageCountNumberBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const PageCountNumber = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  border-radius: 20%;
  padding: 5px 10px;
  cursor: pointer;

  border: ${(props) =>
    props.isCurrentPage ? "2px solid grey" : "1px solid lightgray"};
  background-color: ${(props) =>
    props.isCurrentPage ? "lightgray" : "inherit"};

  &:hover {
    transform: scale(1.03);
    background-color: #009ee4;
  }

  &:active {
    background-color: #0080c1;
  }
`;
