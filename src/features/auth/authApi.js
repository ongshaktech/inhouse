import { apiSlice } from "../api/apiSlice";
import { userLogedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          url: "/rest-auth/login/",
          method: "POST",
          body: data,
        };
      },

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log("result", result);

          localStorage.setItem(
            "inhouse-auth",
            JSON.stringify({
              key: result.data.access,
            })
          );

          dispatch(
            userLogedIn({
              key: result.data.access,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    confirmEmail: builder.mutation({
      query: (data) => ({
        url: "/rest-auth/registration/account-confirm-email/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useConfirmEmailMutation } = authApi;
