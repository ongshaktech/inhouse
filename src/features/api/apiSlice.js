import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://inhouse-api.ongshak.com/`,
    prepareHeaders: (headers, { getState }) => {
      let key = getState()?.auth?.key;

      if (key) {
        headers.set("Authorization", `Bearer ${key}`);
        headers.set("Content-Type", `application/json`);
        headers.set("Accept", `application/json`);
      }
      return headers;
    },
  }),
  tagTypes: ["task", "project", "users"],
  endpoints: () => ({}),
});
