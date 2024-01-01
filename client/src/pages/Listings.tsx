import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Listings = () => {
  interface RootState {
    user: {
      signUpClicked: boolean;
      currentUser: {
        username: string;
      };
    };
  }
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <div className="flex p-16 justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl text-gray-800">
          {" "}
          Welcome back, {currentUser.username}
        </h1>
      </div>
      <Link
        to={"/listing/create"}
        className="border border-gray-500 py-2 px-4 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-95"
      >
        <span>Create Listings</span>
      </Link>
    </div>
  );
};

export default Listings;
