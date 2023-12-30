import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  setOpenAccount,
  signOutFailure,
  signOutStart,
  signOutSuccess,
} from "../redux/user/userSlice";
import { DynamicAxios } from "../utils/DynamicAxios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Account = () => {
  interface RootState {
    user: {
      signUpClicked: boolean;
      currentUser: {
        username: string;
        email: string;
        _id: string;
      };
    };
  }
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [formData, setFormData] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogOut = () => {
    dispatch(signOutStart());
    DynamicAxios("/api/auth/logout", "POST")
      .then((data) => {
        if (data.success === false) {
          dispatch(signOutFailure(data.error));
          toast.error(data.message);
          console.log(data.message);
        } else {
          dispatch(signOutSuccess(data));
          navigate("/");
          dispatch(setOpenAccount(false));
          // dispatch(setOpenModal(false));
          toast.success("User has been logged out");
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(signOutFailure(error.message));
        toast.error(error.message);
      });
  };

  const DeleteAccount = async () => {
    DynamicAxios(`/api/user/delete/${currentUser._id}`, "DELETE")
      .then((data) => {
        dispatch(deleteUserStart());
        if (data.success === false) {
          dispatch(deleteUserFailure(data.error));
          toast.error(data.message);
          console.log(data.message);
        } else {
          dispatch(deleteUserSuccess(data));
          console.log(data);
          navigate("/");
          toast.success("User has been deleted");
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(signOutFailure(error.message));
        toast.error(error.message);
      });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold py-6 text-3xl">Personal Info</h1>
      <form className="flex flex-col gap-4">
        <input ref={fileRef} type="file" className="hidden" accept="img/*" />
        <img
          onClick={() => fileRef.current && fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
          src=""
          alt=""
        />
        <input
          className="border p-3 rounded-lg"
          type="username"
          id="username"
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          id="email"
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          type="password"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span
          onClick={DeleteAccount}
          className="text-red-700 cursor-pointer font-bold"
        >
          Deactivate Account
        </span>
        <span onClick={LogOut} className="text-red-700 cursor-pointer">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Account;
