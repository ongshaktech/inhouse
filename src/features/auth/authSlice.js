import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogedIn: (state, action) => {
      console.log("action", action);
      state.key = action.payload.key;
    },
    userLogedOut: (state) => {
      state.key = undefined;
      localStorage.removeItem("inhouse-auth");
    },
  },
});

export const { userLogedIn, userLogedOut } = authSlice.actions;

export default authSlice.reducer;
