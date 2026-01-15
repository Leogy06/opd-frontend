import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_API_BASEURL,
    credentials: "include",
  }),
  tagTypes: ["Patient", "User"],
  endpoints: () => ({}),
});
