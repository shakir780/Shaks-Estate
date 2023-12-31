import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  setOpenAccount,
  signOutFailure,
  signOutStart,
  signOutSuccess,
  updateFailure,
  updateStart,
  updateSuccess,
} from "../redux/user/userSlice";
import { DynamicAxios } from "../utils/DynamicAxios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FileUpload from "../utils/handleFileUpload";
const Account = () => {
  interface RootState {
    user: {
      signUpClicked: boolean;
      currentUser: {
        username: string;
        email: string;
        _id: string;
        avatar: string;
      };
    };
  }
  interface FormDataState {
    avatar?: string;
  }
  const { currentUser } = useSelector((state: RootState) => state.user);
  console.log(currentUser);
  const [formData, setFormData] = useState<FormDataState>({});
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

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    DynamicAxios(`api/user/update/${currentUser._id}`, "PUT", formData)
      .then((data) => {
        dispatch(updateStart());
        if (data.success === false) {
          dispatch(updateFailure(data.error));
          toast.error(data.message);
          console.log(data.message);
        } else {
          dispatch(updateSuccess(data));
          console.log(data);
          toast.success("User has been updated");
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any): void => {
        dispatch(updateFailure(error.message));
        toast.error(error.message);
      });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold py-6 text-3xl">Personal Info</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FileUpload
          setFormData={setFormData}
          src={formData.avatar || currentUser.avatar}
        />

        <input
          className="border p-3 rounded-lg"
          type="username"
          id="username"
          defaultValue={currentUser?.username}
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          id="email"
          defaultValue={currentUser?.email}
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          type="password"
          id="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
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
