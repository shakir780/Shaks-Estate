import { SlLocationPin } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { IoCallOutline, IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Account from "./Account";
import AccountCard from "./AccountCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenAccount,
  setOpenRegisterModal,
  setSignUpClicked,
} from "../redux/user/userSlice";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";

const Header = () => {
  interface User {
    id: string;
    name: string;
    email: string;
    // Add other properties as needed
  }
  interface RootState {
    user: {
      openAccount: boolean;
      openRegisterModal: boolean;
      currentUser: User; // Assuming 'User' is the correct type for 'currentUser'

      // Add other properties of 'user' here
    };
    // Add other slices of your state here
  }
  const dispatch = useDispatch();
  const openAccount = useSelector((state: RootState) => state.user.openAccount);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const openRegisterModal = useSelector(
    (state: RootState) => state.user.openRegisterModal
  );

  const [openSidebar, setOpenSidebar] = useState(false);
  const openRegisterModals = () => {
    dispatch(setOpenRegisterModal(true));
    dispatch(setSignUpClicked(false));
  };
  return (
    <>
      <header className="p-10 bg-white shadow-lg hidden md:block">
        <div className="flex justify-between items-center px-24">
          <Link to={"/"}>
            <h1 className="font-bold uppercase text-3xl">Shaks Estate</h1>
            <p className="text-sm opacity-95">A Real Estate market place</p>
          </Link>
          <div className="flex gap-5">
            <div className="flex items-center gap-2 ">
              <div className="text-4xl text-blue-700">
                <SlLocationPin />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-700 font-semibold">
                  Our Location
                </span>
                <span>25/7 Barden,London</span>
              </div>
            </div>
            <div className="border-l-[1px] border-blue-200 h-22"></div>
            <div className="flex items-center gap-2">
              <div className="text-4xl text-blue-700 ">
                <TiMessages />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-700 font-semibold">
                  Online Support
                </span>
                <span>info@Shaks.com</span>
              </div>
            </div>
            <div className="border-l-[1px] border-blue-200 h-22"></div>
            <div className="flex items-center gap-2 ">
              <div className="text-4xl text-blue-700 ">
                <IoCallOutline />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-700 font-semibold">
                  Free Contact
                </span>
                <span>+00-4X6-634-781</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-blue-400 shadow-lg  py-4 w-full overflow-hidden     ">
        <div className="flex items-center justify-between md:block  md:px-28">
          <div className="flex justify-between items-center">
            <ul className="md:flex gap-3 text-white font-semibold text-xl uppercase px-3 hidden">
              <Link to={"/"} className="cursor-pointer hover:opacity-60">
                Home
              </Link>
              <li className="cursor-pointer hover:opacity-60">About</li>
            </ul>
            <Link to={"/"} className="md:hidden inline-block px-5 text-white">
              <h1 className="font-bold uppercase text-sm ">Shaks Estate</h1>
            </Link>

            <div className="hidden md:flex gap-6 items-center px-16 ">
              <Link
                onClick={!currentUser ? openRegisterModals : undefined}
                to={currentUser ? "/listing/create" : ""}
                className="bg-white px-4 py-3 h-full flex items-center gap-4 cursor-pointer hover:bg-gray-100"
              >
                <FaPlus className="text-blue-700" />
                <h1>Submit Property</h1>
              </Link>
              <div
                onClick={() => {
                  dispatch(setOpenAccount(!openAccount));
                }}
              >
                {" "}
                <Account />
              </div>
            </div>
          </div>
          <div className="flex px-4 gap-4 ">
            <div
              onClick={() => dispatch(setOpenAccount(!openAccount))}
              className="flex md:hidden"
            >
              <Account />
            </div>
            <div
              onClick={() => setOpenSidebar(!openSidebar)}
              className=" flex md:hidden items-center   cursor-pointer hover:opacity-70"
            >
              <IoMenu className="text-3xl  text-white  " />
            </div>
          </div>
        </div>
      </div>
      {openAccount && <AccountCard />}

      {openSidebar && (
        <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      )}
      {openRegisterModal && <RegisterModal />}
    </>
  );
};

export default Header;
