import { SlLocationPin } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { IoCallOutline, IoMenuSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <>
      <header className="p-10 bg-white shadow-lg hidden md:block">
        <div className="flex justify-between items-center px-8">
          <div>
            <h1 className="font-bold uppercase text-3xl">Shaks Estate</h1>
            <p className="text-sm opacity-95">A Real Estate market place</p>
          </div>
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
      <div className="bg-blue-400  p-1 flex justify-between items-center">
        <ul className="flex gap-3 text-white font-semibold text-xl uppercase px-3">
          <li className="cursor-pointer hover:opacity-60">Home</li>
          <li className="cursor-pointer hover:opacity-60">About</li>
        </ul>

        <div className="flex gap-6 items-center">
          <div className="bg-white px-4 py-4 h-full flex items-center gap-4 cursor-pointer">
            <FaPlus className="text-blue-700" />
            <h1>Submit Property</h1>
          </div>
          <div className="flex border rounded-full py-2 px-4 gap-2 items-center">
            <div>
              <IoMenuSharp className="text-xl" />
            </div>
            <div className="bg-gray-500 rounded-full p-2">
              <VscAccount className="text-xl fill-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
