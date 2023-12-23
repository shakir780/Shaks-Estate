import { useState, useRef, useEffect } from "react";
import RegisterModal from "./RegisterModal";
import {
  setOpenAccount,
  setSignUpClicked,
  signOutFailure,
  signOutStart,
  signOutSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { DynamicAxios } from "../utils/DynamicAxios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const AccountCard = () => {
  const navigate = useNavigate();
  interface RootState {
    user: {
      signUpClicked: boolean;
      currentUser: object;
    };
  }
  const dispatch = useDispatch();
  const signUpClicked = useSelector(
    (state: RootState) => state.user.signUpClicked
  );
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const openRegisterModals = () => {
    setOpenRegisterModal(true);
    dispatch(setSignUpClicked(false));
  };

  const openSignUpModal = () => {
    setOpenRegisterModal(true);
    dispatch(setSignUpClicked(!signUpClicked));
  };
  const { currentUser } = useSelector((state: RootState) => state.user);

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

  const closeAccountRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeAccountRef.current &&
        !closeAccountRef.current.contains(event.target as Node)
      ) {
        dispatch(setOpenAccount(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {!openRegisterModal && (
        <div
          ref={closeAccountRef}
          className="bg-white shadow-2xl py-4 w-[200px] float-right mr-[50px] md:mr-[180px] border-2 rounded-lg "
        >
          <div className="flex flex-col gap-3 w-full ">
            <span
              onClick={openRegisterModals}
              className={`hover:bg-blue-200 block cursor-pointer w-full px-7 py-2 rounded-lg text-gray-500 font-semibold ${
                currentUser && "hidden"
              }`}
            >
              Log in
            </span>

            <span
              onClick={openSignUpModal}
              className={`hover:bg-blue-200 block cursor-pointer w-full  px-7 py-2 rounded-lg text-gray-500 font-semibold ${
                currentUser && "hidden"
              }`}
            >
              Sign Up
            </span>
            <Link
              to={"/account"}
              onClick={() => dispatch(setOpenAccount(false))}
              className={`hover:bg-blue-200 block cursor-pointer w-full  px-7 py-2 rounded-lg text-gray-500 font-semibold `}
            >
              My Account
            </Link>
            <span
              onClick={LogOut}
              className={`hover:bg-blue-200 block cursor-pointer w-full  px-7 py-2 rounded-lg text-gray-500 font-semibold ${
                !currentUser && "hidden"
              }`}
            >
              Log Out
            </span>
          </div>
        </div>
      )}

      {openRegisterModal && <RegisterModal />}
    </>
  );
};

export default AccountCard;
