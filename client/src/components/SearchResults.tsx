import { FaBath, FaBed } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Listing {
  type?: string;
  _id?: string;
  imageUrls?: string[];
  title?: string;
  address?: string;
  bedrooms?: number;
  bathrooms?: number;
}
const SearchResults = ({ listings }: { listings: Listing[] }) => {
  return (
    <div className="flex flex-wrap w-full gap-2 pb-8 px-4">
      {listings?.map((listing, index) => (
        <Link to={`/listing/${listing?._id}`} key={index} className="relative">
          <span className="absolute bg-blue-500 px-6 py-1 font-semibold text-sm text-center ml-4 my-3 uppercase text-white">
            for {listing?.type}
          </span>
          <div className={` flex flex-col gap-3  w-full text-gray-700`}>
            <img
              src={listing?.imageUrls?.[0] || ""}
              alt={listing?.imageUrls?.[0] || ""}
              className="h-[320px] sm:h-[220px] w-[350px] object-cover hover:scale-95 transition-scale duration-300"
            />
          </div>
          <div className="bg-white  ">
            <div className="px-3 py-4 flex flex-col gap-3 text-gray-700">
              <p className="truncate text-sm font-semibold capitalize text-slate-700">
                {listing?.title}
              </p>
              <div className="flex gap-2 items-center">
                <IoLocationSharp />

                <span>{listing?.address}</span>
              </div>
              <div className="flex gap-6 items-center mx-1">
                <div className="flex items-center gap-3">
                  <span>
                    <FaBed />
                  </span>
                  <span>{listing?.bedrooms} beds</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                    <FaBath />
                  </span>
                  <span>{listing?.bathrooms} baths</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
