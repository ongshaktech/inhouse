import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users/get_users/",
      providesTags: ["users"],
    }),
    getProfile: builder.query({
      query: () => "/users/get_profile/",
      providesTags: ["users"],
    }),

    updateProfile: builder.mutation({
      query: ({ data }) => ({
        url: "/users/update_profile/",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = userApi;
