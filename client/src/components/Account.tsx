import { IoMenuSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Account = () => {
  return (
    <div className="">
      <div className="flex  border border-gray-30000 rounded-full py-2 px-4 gap-2 items-center cursor-pointer hover:scale-95">
        <div>
          <IoMenuSharp className="text-xl " />
        </div>
        <div className="bg-gray-500 rounded-full p-2">
          <VscAccount className="text-xl fill-white" />
        </div>
      </div>
    </div>
  );
};

export default Account;
