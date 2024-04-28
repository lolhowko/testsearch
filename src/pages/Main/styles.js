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
