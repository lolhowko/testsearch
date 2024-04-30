import styled from "styled-components";

const modileWidth = "620px";

export const SearchContainer = styled.div`
  margin: 20px 0px;
  position: relative;
`;
export const SearchImage = styled.img`
  position: absolute;
  left: 5px;
  top: 5px;

  @media screen and (max-width: ${modileWidth}) {
    top: 5px;
    left: 0px;
  }
`;

export const SearchForm = styled.form`
  max-width: 1044px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 120%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  padding-left: 60px;

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: ${modileWidth}) {
    width: 70%;
    height: 40px;

    padding-left: 50px;
    font-size: 12px;

    &::placeholder {
      font-weight: 300;
      font-size: 12px;
    }
  }
`;
export const SearchButton = styled.button`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${modileWidth}) {
    width: 100px;
    font-size: 12px;
    height: 40px;
  }
`;
