import { useState } from "react";
import RegisterModal from "./RegisterModal";
import { setSignUpClicked } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AccountCard = () => {
  interface RootState {
    user: {
      signUpClicked: boolean;
      // Add other properties of 'user' here
    };
    // Add other slices of your state here
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
  return (
    <>
      {!openRegisterModal && (
        <div className="bg-white shadow-2xl py-4 w-[200px] float-right mr-[50px] md:mr-[180px] border-2 rounded-lg ">
          <div className="flex flex-col gap-3 w-full ">
            <span
              onClick={openRegisterModals}
              className="hover:bg-blue-200 block cursor-pointer w-full px-7 py-2 rounded-lg text-gray-500 font-semibold"
            >
              Log in
            </span>

            <span
              onClick={openSignUpModal}
              className="hover:bg-blue-200 block cursor-pointer w-full  px-7 py-2 rounded-lg text-gray-500 font-semibold"
            >
              Sign Up
            </span>
          </div>
        </div>
      )}

      {openRegisterModal && <RegisterModal />}
    </>
  );
};

export default AccountCard;
