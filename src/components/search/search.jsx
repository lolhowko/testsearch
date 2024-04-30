import { useEffect } from "react";
import * as S from "./styles";

export const Search = ({
  searchText,
  setSearchText,
  setStartSearch,
  isLoading,
}) => {
  const handleStartSearch = (e) => {
    e.preventDefault();
    setStartSearch(true);
  };

  useEffect(() => {
    if (searchText === "") {
      setStartSearch(false);
    }
  }, [searchText, setStartSearch]);

  return (
    <S.SearchContainer>
      <S.SearchImage src="./img/search-icon.png" alt="search" />
      <S.SearchForm onSubmit={handleStartSearch}>
        <S.SearchInput
          type="search"
          placeholder="Введите логин пользователя"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <S.SearchButton type="submit" disabled={isLoading}>
          {isLoading ? "Ищем" : "Найти"}
        </S.SearchButton>
      </S.SearchForm>
    </S.SearchContainer>
  );
};
