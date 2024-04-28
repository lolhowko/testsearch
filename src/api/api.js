import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: ({ username, pages }) =>
        `search/users?q=${username}&sort=repositories&order=desc&page=${pages ? pages : 1}`,
    }),
    getUserIncrease: builder.query({
      query: ({ username, pages }) =>
        `search/users?q=${username}&sort=repositories&order=asc&page=${pages ? pages : 1}`,
    }),
    hetUserData: builder.query({
      query: ({ username }) => {
        if (username) {
          return `users/${username}`;
        } else {
          return "";
        }
      },
    }),
  }),
});

export async function getUsersRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const repositories = await response.json();
  return repositories;
}

export const {
  useGetUsersInfoQuery,
  useGetUsersIncreaseQuery,
  useGetUserDataQuery,
} = Api;
