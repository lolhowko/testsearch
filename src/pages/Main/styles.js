import styled from "styled-components";

const modileWidth = "620px";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MainTitle = styled.h1`
  margin: 15px 0px;
`;

export const Message = styled.div`
  display: flex;
  color: red;
  color: #7f00ff;
  font-size: 18px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${modileWidth}) {
    font-size: 12px;
  }
`;
