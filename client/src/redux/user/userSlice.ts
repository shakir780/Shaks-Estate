import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  signUpClicked: false,
  openAccount: false,
  openModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signUpStart: (state) => {
      state.loading = true;
    },
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signUpFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSignUpClicked: (state, action) => {
      state.signUpClicked = action.payload;
    },
    setOpenAccount: (state, action) => {
      state.openAccount = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

export const {
  signInStart,
  signInFailure,
  signInSuccess,
  setSignUpClicked,
  setOpenAccount,
  signUpStart,
  signUpFailure,
  signUpSuccess,
  setOpenModal,
} = userSlice.actions;

export default userSlice.reducer;
