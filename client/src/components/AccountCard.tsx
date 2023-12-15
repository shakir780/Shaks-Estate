import { useState } from "react";
import RegisterModal from "./RegisterModal";

const AccountCard = ({ setOpenAccount, openAccount }) => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const openRegisterModals = () => {
    setOpenRegisterModal(true);
  };

  return (
    <>
      {!openRegisterModal && (
        <div className="bg-white shadow-2xl py-4 w-[200px] float-right mr-10 border-2 rounded-lg ">
          <div className="flex flex-col gap-3 w-full ">
            <span
              onClick={openRegisterModals}
              className="hover:bg-blue-200 block cursor-pointer w-full px-7 py-2 rounded-lg text-gray-500 font-semibold"
            >
              Log in
            </span>

            <span
              onClick={openRegisterModals}
              className="hover:bg-blue-200 block cursor-pointer w-full  px-7 py-2 rounded-lg text-gray-500 font-semibold"
            >
              Sign Up
            </span>
          </div>
        </div>
      )}

      {openRegisterModal && (
        <RegisterModal
          openRegisterModal={openRegisterModal}
          setOpenRegisterModal={setOpenRegisterModal}
          openAccount={openAccount}
          setOpenAccount={setOpenAccount}
        />
      )}
    </>
  );
};

export default AccountCard;
