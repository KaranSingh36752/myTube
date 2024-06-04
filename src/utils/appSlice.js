import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen; //it is to toggle the slice data
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
