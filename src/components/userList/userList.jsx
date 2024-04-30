import { Link } from "react-router-dom";
import * as S from "./styles";

export const UsersList = ({ userData }) => {
  return (
    <S.UsersListDiv>
      <S.UsersListBlock>
        {userData?.items.length > 0 ? (
          userData.items.map((user) => {
            return (
              <S.UserList key={user.id}>
                <Link to={`/userPage/${user.login}`}>
                  <S.UserListImage>
                    <S.UserListImg src={user.avatar_url} alt="avatar" />
                  </S.UserListImage>
                  <S.UserListContent>
                    <S.UserListName>{user.login}</S.UserListName>
                  </S.UserListContent>
                </Link>
              </S.UserList>
            );
          })
        ) : (
          <S.Message>По Вашему запросу ничего не найдено</S.Message>
        )}
      </S.UsersListBlock>
    </S.UsersListDiv>
  );
};
