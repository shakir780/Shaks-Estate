import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaBath, FaBed } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Listings = () => {
  interface RootState {
    user: {
      signUpClicked: boolean;
      currentUser: {
        username: string;
        _id: number;
      };
    };
  }
  interface Listing {
    type: string;
    title: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    imageUrls: string[];
    _id: number;

    // Add other properties of a listing here
  }

  const { currentUser } = useSelector((state: RootState) => state.user);
  const [userListings, setUserListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/user/listings/${currentUser._id}`);
        const data = await res.json();
        setUserListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListing();
  }, []);

  const handleListingDelete = async (listingId: number) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <>
      <div className="flex p-16 justify-between md:flex-row flex-col gap-6 items-center ">
        <div>
          <h1 className="font-bold md:text-3xl text-gray-800">
            {" "}
            Welcome back, {currentUser.username}
          </h1>
        </div>
        <Link
          to={"/listing/create"}
          className="border border-gray-500 py-2 text-sm  px-4 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-95"
        >
          <span>Create Listings</span>
        </Link>
      </div>
      <div>
        <h1 className="font-bold text-xl text-red-800 px-16 py-4 pb-8">
          Your Listings
        </h1>
        <div className="flex flex-wrap w-full gap-2 pb-8 px-4">
          {userListings?.map((user, index) => (
            <div key={index} className="relative">
              <span className="absolute bg-blue-500 px-6 py-1 font-semibold text-sm text-center ml-4 my-3 uppercase text-white">
                for {user?.type}
              </span>
              <div className={` flex flex-col gap-3  w-full text-gray-700`}>
                <img
                  src={user?.imageUrls?.[0] || ""}
                  alt={user?.imageUrls?.[0] || ""}
                  className="h-[320px] sm:h-[220px] w-[350px] object-cover hover:scale-95 transition-scale duration-300"
                />
              </div>
              <div className="bg-white  ">
                <div className="px-3 py-4 flex flex-col gap-3 text-gray-700">
                  <p className="truncate text-sm font-semibold capitalize text-slate-700">
                    {user?.title}
                  </p>
                  <div className="flex gap-2 items-center">
                    <IoLocationSharp />

                    <span>{user?.address}</span>
                  </div>
                  <div className="flex gap-6 items-center mx-1">
                    <div className="flex items-center gap-3">
                      <span>
                        <FaBed />
                      </span>
                      <span>{user?.bedrooms} beds</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <FaBath />
                      </span>
                      <span>{user?.bathrooms} baths</span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between border px-4 py-2 text-2xl text-blue-500">
                  <span
                    onClick={() => handleListingDelete(user?._id)}
                    className="cursor-pointer"
                  >
                    <MdDelete />
                  </span>
                  <Link to={`/update-listing/${user._id}`}>
                    <CiEdit />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listings;
