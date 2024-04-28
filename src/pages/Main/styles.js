import styled from "styled-components";

const modileWidth = "620px";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  aligh-items: center;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 30px;

  @media screen and (max-width: ${modileWidth}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SearchButton = styled.button`
  width: 100px;
  heith: 30px;
  background-color: transparent;
  border-radius: 6px;
  color: black;
  font-size: 18px;
  font-style: normal;
  margin-left: 20px;

  &:hover {
    background-color: grey;
    color: white;
    transform: scale(1.05);
  }

  &:active {
    background-color: dark grey;
    color: white;
  }

  @media screen and (max-width: ${modileWidth}) {
    margin-top: 20px;
  }
`;

export const SearchLoginInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 6px;
  padding-left: 10px;
`;

export const ButtonBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;

  @media screen and (max-width: ${modileWidth}) {
    margin-top: 10px;
    flex-direction: column;
    gap: 15px;
  }
`;

export const ButtonRegulat = styled.button`
  width: 130px;
  height: 30px;
  background-color: transparent;
  border-radius: 6px;
  color: black;
  border: 0;
  font-size: 14px;
  font-style: normal;
  
  &:active {
    background-color: dark grey;
    color: white;
  }
  &:hover {
    background-color: grey;
    color: white;
    transform: scale(1.05);
  }
`;
export const UserlistContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100vh;
  width: 100%;
  grid-gap: 40px 26px;
  justify-content: center;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
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
`;
