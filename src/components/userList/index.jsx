import { useSelector } from "react-redux";
import * as S from "./styles";
import { useState } from "react";
import { getUsersRepos } from "../../api/api";

export const UserList = ({ userNameInput }) => {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repos, setRepos] = useState([]);

  if (!users || !users.items) return "";
  if (users.total_count === 0) return <>Пользователя с таким именем нет</>;

  const openModal = async (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
    const resposUser = await getUsersRepos(userNameInput);
    console.log(resposUser);
    setRepos(resposUser);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {users.items.map((user, index) => {
        <S.UserList key={index}>
          <S.UserListItem onClick={openModal(user)}>
            <S.UserListImage>
              <S.UserListImg src={user.avatar_url} alt="picture" />
            </S.UserListImage>
            <S.UserListContent>
              <S.UserListName>{user.login}</S.UserListName>
            </S.UserListContent>
          </S.UserListItem>
        </S.UserList>;
        {
          // isModalOpen && selectedUser && ( );
        }
      })}
    </>
  );
};
