import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  type: "register",
  error:"",
  loginData : null,
  registerData : null,
  alert : {},
  loginResponse: null
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
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload
    },
    setRegisterData: (state, action) => {
      state.registerData = action.payload
    },
    setAlert: (state,action) => {
      state.alert = action.payload
    },
    setLoginResponse: (state,action) => {
      state.loginResponse = action.payload
    }
  },
});

export const { setMode, setType, setLoginData,  setRegisterData, setAlert, setLoginResponse} = modeSlice.actions;
export default modeSlice.reducer;
