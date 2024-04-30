import * as S from "./styles";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../api/api";
import { UsersList } from "../../components/userList";
import { ReposOrderComponent } from "../../components/repos-order/repos-order";
import { Search } from "../../components/search/search";
import { ElamentPerPage } from "../../components/per-page/per-page";
import { Pagination } from "../../components/pagination/pagination";

export const MainPage = () => {
  const [searchText, setSearchText] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const [reposOrder, setReposOrder] = useState("desc");
  const [chosenButton, setChosenButton] = useState("по убыванию");

  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: userData,
    error: userDataError,
    isLoading,
  } = useGetUserQuery({
    userLogin: searchText,
    per_page: perPage,
    page: currentPage,
    order: reposOrder,
  });

  useEffect(() => {
    if (userDataError?.status === 422) {
      setErrorText("Для начала работы введите Ваш запрос в строку поиска");
    } else if (userDataError?.status === 403) {
      setErrorText("Произошла ошибка, попробуйте еще раз");
    } else {
      setErrorText(null);
    }

    setPerPage(10);
    setChosenButton("по убыванию");
  }, [userDataError, setPerPage, setChosenButton]);

  return (
    <S.Wrapper>
      <S.MainTitle>Поиск пользователей GitHub</S.MainTitle>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        setStartSearch={setStartSearch}
        isLoading={isLoading}
      />

      {startSearch && !errorText ? (
        isLoading ? (
          <p>Подождите, ищем совпадения...</p>
        ) : (
          <>
            <ReposOrderComponent
              setReposOrder={setReposOrder}
              setChosenButton={setChosenButton}
              chosenButton={chosenButton}
            />

            <UsersList userData={userData} />

            <ElamentPerPage
              perPage={perPage}
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />

            <Pagination
              userData={userData}
              perPage={perPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )
      ) : (
        <S.Message>{errorText}</S.Message>
      )}
    </S.Wrapper>
  );
};
