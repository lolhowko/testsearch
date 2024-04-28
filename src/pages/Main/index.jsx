import * as S from "./styles";

export const MainPage = () => {
  return (
    <S.Wrapper>
      <S.SearchForm>
        <S.SearchLoginInput
          placeholder="Введите логин пользователя"
          type="search"
        ></S.SearchLoginInput>
        <S.SearchButton>Искать</S.SearchButton>
      </S.SearchForm>
    </S.Wrapper>
  );
};
