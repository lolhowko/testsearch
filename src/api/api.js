import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.github.com",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    Accept: "application/vnd.github.text-match+json",
    // "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
  },
})

export const Api = createApi({
  reducerPath: "Api",
  baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ userLogin, per_page, page, order }) =>
        `/search/users?q=${userLogin}+in:login&sort=repositories&order=${order}&per_page=${per_page}&page=${page}`,
    }),
    getCurrentUser: builder.query({
      query: ({ userLogin }) => `users/${userLogin}`,
    }),
   
  }),
})

export const {
  useGetUserQuery,
  useGetCurrentUserQuery
} = Api