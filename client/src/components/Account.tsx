import { IoMenuSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Account = () => {
  interface RootState {
    user: {
      currentUser: {
        avatar: string;
       
      };
    
    };
 
  }
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <div className="">
      <div className="flex  border border-gray-30000 rounded-full py-2 px-4 gap-2 items-center cursor-pointer hover:scale-95">
        <div>
          <IoMenuSharp className="text-xl " />
        </div>
        <div className="bg-gray-500 rounded-full p-2">
          {currentUser ? (
            <img
              className="rounded-full h-7 w-7 object-cover "
              src={currentUser.avatar}
              alt="profile"
            />
          ) : (
            <VscAccount className="text-xl fill-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
