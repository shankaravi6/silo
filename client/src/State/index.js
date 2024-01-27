import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  type: "register"
};

export const modeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setType: (state, action) => {
      state.type = state.type === "register" ? "login" : "register";
    }
  },
});

export const { setMode, setType } = modeSlice.actions;
export default modeSlice.reducer;
