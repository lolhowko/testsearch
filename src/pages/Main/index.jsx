import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { useEffect, useState } from "react";
import {
  searchingUser,
  updatingUserNameInput,
} from "../../store/slice/userSlice";
import { useGetUsersIncreaseQuery, useGetUsersInfoQuery } from "../../api/api";
import { UserList } from "../../components/userList";
import { isImmutableDefault } from "@reduxjs/toolkit";

export const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userNameInput = useSelector((state) => state.users.userNameInput);

  const [username, setUsername] = useState(userNameInput || "");
  const [pages, setPages] = useState(1);
  const [isIncrease, setIncrease] = useState(true);
  const [activeButton, setActiveButton] = useState("increasing");
  const [message, setMessage] = useState(null);
  const [pass, setPass] = useState(false);

  const setData = { username, pages };

  const showMessage = (text, duration = 2000) => {
    setMessage(text);
    setTimeout(() => {
      setMessage(null);
    }, duration);
  };

  useEffect(() => {
    dispatch(updatingUserNameInput(userNameInput));
  }, [dispatch, userNameInput]);

  const { data, isLoading, error } = useGetUsersIncreaseQuery(setData, {
    skip: !pass,
    onSuccess: () => {
      setPass(false);
    },
  });

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(searchingUser(data));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (error.status === 403) {
        showMessage("Произошла ошибка. Попробуйте позже.");
      } else {
        showMessage("Произошла ошибка. Попробуйте позже.");
      }
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setUsername(userNameInput);
    dispatch(updatingUserNameInput(userNameInput));
    setPass(true);
  };

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(searchingUser(data));
    }
  }, [data, isLoading]);

  const handleInputChange = (event) => {
    dispatch(updatingUserNameInput(event.target.value));
  };

  const handleIncrease = (event) => {
    event.preventDefault();
    setIncrease(true);
    setActiveButton("increasing");
    setPass(true);
  };

  const handleIncreasingBtn = (event) => {
    event.preventDefault();
    setIncrease(false);
    setActiveButton("decreading");
    setPass(true);
  };

  return (
    <S.Wrapper>
      <S.SearchForm>
        <S.SearchLoginInput
          value={userNameInput}
          placeholder="Введите логин пользователя"
          type="search"
          onChange={handleInputChange}
        ></S.SearchLoginInput>
        <S.SearchButton onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Ищем" : "Искать"}
        </S.SearchButton>
      </S.SearchForm>
      <S.ButtonBox>
        <p>сортировать по:</p>
        <S.ButtonRegulat
          onClick={handleIncrease}
          className={activeButton === "increasing" ? "active" : ""}
          data-isactive={activeButton === "increasing"}
        >
          по возрастанию
        </S.ButtonRegulat>

        <S.ButtonRegulat
          onClick={handleIncreasingBtn}
          className={activeButton === "decreasing" ? "active" : ""}
          data-isactive={activeButton === "decreasing"}
        >
          по убыванию
        </S.ButtonRegulat>
      </S.ButtonBox>
      {message && <S.Message>{message}</S.Message>}
      <S.UserlistContent>
        <UserList users={users} userNameInput={userNameInput} />
      </S.UserlistContent>
    </S.Wrapper>
  );
};
