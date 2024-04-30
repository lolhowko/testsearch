import styled from "styled-components";

export const PerPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`;
export const PerPageText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
export const PerPageNumberBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;
export const PerPageNumber = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  border: ${(props) =>
    props.chosen ? "2px solid grey" : "1px solid lightgray"};
  background-color: ${(props) => (props.chosen ? "lightgray" : "inherit")};
  border-radius: 50%;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    background-color: #009ee4;
  }

  &:active {
    background-color: #0080c1;
  }
`;
