import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  const [openSomething, setOpenSomething] = useState(false);
  return (
    <div className="w-80 h-screen bg-white shadow-2xl fixed top-0 z-50 ">
      <div className="flex gap-3 items-center justify-between p-4">
        <h1 className="font-bold uppercase text-2xl p-6">Shaks Estate</h1>
        <IoMdClose
          onClick={() => setOpenSidebar(!openSidebar)}
          className="mr-4 text-2xl cursor-pointer"
        />
      </div>
      <hr />
      <div className="p-10 ">
        <h3 className="font-bold pb-10">PAGES</h3>
        <div className="flex flex-col gap-6 cursor-pointer font-semibold text-gray-700 text-sm">
          <Link to={"/"} className="hover:opacity-75">
            HOME
          </Link>
          <span
            onClick={() => setOpenSomething(true)}
            className="hover:opacity-75"
          >
            ABOUT
          </span>
          <span className="hover:opacity-75">SUBMIT PROPERTY</span>
        </div>
      </div>
      <hr />
      <div className="p-10">
        <h3 className="font-bold pb-4">GET IN TOUCH</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 ">
            <div className="text-2xl ">
              <SlLocationPin />
            </div>
            <div className="flex flex-col">
              <span className=" font-semibold">Our Location</span>
              <span>25/7 Barden,London</span>
            </div>
          </div>
          <div className="border-l-[1px] border-blue-200 h-22"></div>
          <div className="flex items-center gap-2">
            <div className="text-2xl  ">
              <TiMessages />
            </div>
            <div className="flex flex-col">
              <span className=" font-semibold">Online Support</span>
              <span>info@Shaks.com</span>
            </div>
          </div>
          <div className="border-l-[1px] border-blue-200 h-22"></div>
          <div className="flex items-center gap-2 ">
            <div className="text-2xl  ">
              <IoCallOutline />
            </div>
            <div className="flex flex-col">
              <span className=" font-semibold">Free Contact</span>
              <span>+00-4X6-634-781</span>
            </div>
          </div>
        </div>
      </div>
      {openSomething && <RegisterModal />}
    </div>
  );
};

export default Sidebar;
