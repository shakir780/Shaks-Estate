/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa"; // Import the circular loading spinner
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSignUpClicked,
  setOpenAccount,
  signUpStart,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import toast from "react-hot-toast";
import { DynamicAxios } from "../utils/DynamicAxios";
import OAuth from "./OAuth";
import { FbAuth } from "./FbAuth";

import FileUpload from "../utils/handleFileUpload";
const RegisterModal = () => {
  const navigate = useNavigate();

  interface RootState {
    user: {
      signUpClicked: boolean;
      openAccount: boolean;
      openModal: boolean;
      loading: boolean;
    };
  }
  interface FormDataState {
    avatar?: string;
  }
  const dispatch = useDispatch();
  const signUpClicked = useSelector(
    (state: RootState) => state.user.signUpClicked
  );
  const loading = useSelector((state: RootState) => state.user.loading);

  const [formData, setFormData] = React.useState<FormDataState>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const signInUrl = "/api/auth/signIn";
  const signUpUrl = "/api/auth/signup";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signUpClicked) {
      dispatch(signUpStart());
      DynamicAxios(signUpUrl, "POST", formData)
        .then((data) => {
          if (data.success === false) {
            dispatch(signUpFailure(data.error));
            toast.error(data.message);
          } else {
            dispatch(signUpSuccess(data));
            navigate("/");
            dispatch(setOpenAccount(false));
            toast.success("User created successfully");
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(signUpFailure(error.message));
          toast.error(error.message);
        });
    } else {
      dispatch(signInStart());
      DynamicAxios(signInUrl, "POST", formData)
        .then((data) => {
          if (data.success === false) {
            dispatch(signInFailure(data.error));
            toast.error(data.message);
            console.log(data.message);
          } else {
            dispatch(signInSuccess(data));
            navigate("/");
            dispatch(setOpenAccount(false));
            // dispatch(setOpenModal(false));
            toast.success("User created successfully");
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(signInFailure(error.message));
          toast.error(error.message);
        });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-8 bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white w-[600px] rounded-2xl p-8  2xl:overflow-hidden overflow-y-scroll h-[600px] 2xl:h-fit  ">
          <div className="flex justify-between items-center pb-6">
            <header className="text-center font-bold text-xl text-gray-600  ">
              <span>Log in or sign up</span>
            </header>
            <div
              onClick={() => {
                dispatch(setOpenAccount(false));
              }}
              className="cursor-pointer"
            >
              <IoCloseSharp className="text-2xl" />
            </div>
          </div>

          <hr />
          <div className="p-4">
            <span className="font-semibold text-sm md:text-lg text-gray-700">
              Welcome to Shaks Estate
            </span>
          </div>
          {
            <h2 className=" text-xl md:text-2xl mb-4 text-center font-semibold">
              {" "}
              {signUpClicked ? "Sign Up " : "Login"}{" "}
            </h2>
          }
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-8">
            {signUpClicked && (
              <FileUpload
                setFormData={setFormData}
                src={formData.avatar || ""}
              />
            )}
            {signUpClicked && (
              <input
                type="text"
                placeholder="username"
                className="border p-3 rounded-lg"
                id="username"
                onChange={handleChange}
              />
            )}
            <input
              type="email"
              placeholder="email"
              className="border p-3 rounded-lg"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="border p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />
            <button
              className="bg-blue-400 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
              disabled={loading} // Disable the button when loading is true
            >
              {loading ? (
                <div className="text-center flex  justify-center">
                  <FaSpinner className="animate-spin mr-2 text-2xl" />
                </div>
              ) : // Show "Sign Up" or "Log In" text based on signUpClicked when loading is false
              signUpClicked ? (
                "Sign Up"
              ) : (
                "Log In"
              )}
            </button>
            <div
              className="flex items-center
             gap-4"
            >
              <span className="border border-gray-500  w-full "></span>
              <span>or</span>
              <span className="border border-gray-500  w-full "></span>
            </div>
            <OAuth />
            <FbAuth />
          </form>
          <div className="flex gap-2 md:gap-2 mt-5 items-center">
            <p className="text-xs md:text-lg">
              {signUpClicked
                ? "Dont Have an account"
                : "Already have an account"}
            </p>

            <span
              className="text-blue-700 cursor-pointer text-sm "
              onClick={() => dispatch(setSignUpClicked(!signUpClicked))}
            >
              {signUpClicked ? "Log in" : " Sign Up"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
