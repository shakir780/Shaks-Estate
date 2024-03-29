import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  signUpClicked: false,
  openAccount: false,
  openModal: false,
  filePerc: 0,
  fileUploadError: false,
  openRegisterModal: false,
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
    signOutStart: (state) => {
      state.loading = true;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSignUpClicked: (state, action) => {
      state.signUpClicked = action.payload;
    },
    setOpenAccount: (state, action) => {
      state.openAccount = action.payload;
    },
    setOpenRegisterModal: (state, action) => {
      state.openRegisterModal = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
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
  signOutFailure,
  signOutStart,
  signOutSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  updateStart,
  updateFailure,
  updateSuccess,
  setOpenRegisterModal,
} = userSlice.actions;

export default userSlice.reducer;
