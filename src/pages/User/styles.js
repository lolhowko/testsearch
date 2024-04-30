import styled from "styled-components";

const modileWidth = "620px";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const UserPageTittle = styled.h1`
  margin: 15px 0px;
`;

export const UserPageTittleName = styled.span`
  font-style: italic;
  background-color: #d9d7d7;
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width: ${modileWidth}) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
`;

export const UserDataText = styled.h2`
  margin: 15px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

export const UserDataTextSpan = styled.span`
  font-style: italic;
  margin-left: 5px;
`;

export const UserDataUrl = styled.a`
  font-style: italic;
  margin-left: 5px;
  color: black;

  &:hover {
    border-bottom: 1px solid grey;
  }
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

export const UserLink = styled.button`

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: none;
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
