import { useGetCurrentUserQuery } from "../../api/api";
import * as S from "./styles";
import { Link, useParams } from "react-router-dom";

export const UserPage = () => {
  const { userId } = useParams();

  const {
    data: currentUserData,
    error,
    isLoading,
  } = useGetCurrentUserQuery({
    userLogin: userId,
  });

  console.log(currentUserData);

  return (
    <S.Wrapper>
      {error === undefined ? (
        <>
          <S.UserPageTittle>
            Информация о <S.UserPageTittleName>{userId}</S.UserPageTittleName>
          </S.UserPageTittle>
          <S.UserAvatar src={currentUserData?.avatar_url} alt="avatar" />

          <S.UserContent>
            <S.UserDataText>
              Cсылка на аккаунт:
              <S.UserDataUrl href={currentUserData?.html_url}>
                {currentUserData?.html_url === null ? (
                  <S.UserDataTextSpan>не найденo</S.UserDataTextSpan>
                ) : (
                  currentUserData?.html_url
                )}
              </S.UserDataUrl>
            </S.UserDataText>
            <S.UserDataText>
              Имя пользователя:
              <S.UserDataTextSpan>
                {currentUserData?.name === null ? (
                  <S.UserDataTextSpan>не найденo</S.UserDataTextSpan>
                ) : (
                  currentUserData?.name
                )}
              </S.UserDataTextSpan>
            </S.UserDataText>
            <S.UserDataText>
              email:
              <S.UserDataTextSpan>
                {currentUserData?.email === null ? (
                  <S.UserDataTextSpan>не найден</S.UserDataTextSpan>
                ) : (
                  currentUserData?.email
                )}
              </S.UserDataTextSpan>
            </S.UserDataText>
            <S.UserDataText>
              Количество подписчиков:
              <S.UserDataTextSpan>
                {currentUserData?.followers === null ? (
                  <S.UserDataTextSpan>не найденo</S.UserDataTextSpan>
                ) : (
                  currentUserData?.followers
                )}
              </S.UserDataTextSpan>
            </S.UserDataText>
            <S.UserDataText>
              Количество подписок:
              <S.UserDataTextSpan>
                {currentUserData?.following === null ? (
                  <S.UserDataTextSpan>не найденo</S.UserDataTextSpan>
                ) : (
                  currentUserData?.following
                )}
              </S.UserDataTextSpan>
            </S.UserDataText>
            <S.UserDataText>
              Количество репозиториев:
              <S.UserDataTextSpan>
                {currentUserData?.public_repos === null ? (
                  <S.UserDataTextSpan>не найденo</S.UserDataTextSpan>
                ) : (
                  currentUserData?.public_repos
                )}
              </S.UserDataTextSpan>
            </S.UserDataText>
          </S.UserContent>
        </>
      ) : (
        <S.Message> Пользователь не найден </S.Message>
      )}

      <Link to="/">
        <S.UserLink>На главную</S.UserLink>
      </Link>
    </S.Wrapper>
  );
};
