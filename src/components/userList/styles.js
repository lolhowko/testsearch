import styled from "styled-components";

const modileWidth = "620px";

export const UsersListDiv = styled.div`
  margin: 30px 0px;
`;
export const UsersListBlock = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;

  @media screen and (max-width: ${modileWidth}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const UserList = styled.div`
  margin: 0;
  width: 150px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    transition: all 500ms ease;
  }
`;

export const UserListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
`;

export const UserListName = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-wrap: wrap;
  width: 130px;
  text-align: center;
  margin-bottom: 10px;
`;

export const UserListImage = styled.div`
  background-color: #f0f0f0;

  @media screen and (max-width: ${modileWidth}) {
    background-color: #d9d9d9;
  }
`;
export const UserListImg = styled.img`
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