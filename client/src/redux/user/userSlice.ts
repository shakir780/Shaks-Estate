import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
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
      toast.success(action.payload);
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload);
    },
    signUpStart: (state) => {
      state.loading = true;
    },
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      toast.success(action.payload);
    },
    signUpFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload);
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
