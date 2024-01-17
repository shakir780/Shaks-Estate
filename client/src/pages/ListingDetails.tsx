import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiPlatformdotsh } from "react-icons/si";
import ShowAllImage from "../components/ShowAllImage";
import { IoMdBed } from "react-icons/io";
import { LiaToiletSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Contact } from "../components/Contact";
import { IoLocation } from "react-icons/io5";

interface Listing {
  title?: string;
  address?: string;
  description?: string;
  bathrooms?: string;
  regularPrice?: number;
  userRef?: string;

  discountPrice?: number;
  wifi?: boolean;
  bedrooms?: boolean;
  parking?: boolean;
  radio?: boolean;
  tv?: boolean;
  ac?: boolean;
  pets?: boolean;
  type?: string;
  furnished?: boolean;
  imageUrls?: string[] | undefined;
}
interface UserType {
  currentUser: {
    _id: string;
  };
}

const ListingDetails = () => {
  const { currentUser } = useSelector(
    (state: { user: UserType }) => state.user
  );

  const params = useParams();
  const [listing, setListing] = useState<Listing | null>(null);
  const [contact, setContact] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listing/${params.id}`);
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
        }
        setListing(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListing();
  }, [params.id]);

  return (
    <div>
      <main className="mt-4 max-w-[1180px] mx-auto">
        <div
          className="flex md:flex-row gap-4 flex-col items-center justify-between
        "
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              {listing?.title}
            </h1>
            <p className="bg-red-900 w-full max-w-[100px] text-white text-center p-1 rounded-md">
              {listing?.type === "rent" ? "For Rent" : "For Sale"}
            </p>

            <div className="flex items-center gap-2 ">
              <IoLocation />

              <p>{listing?.address}</p>
            </div>
          </div>

          <p className="text-2xl font-bold">
            $ {listing?.regularPrice?.toLocaleString("en-US")}{" "}
            {listing?.type === "rent" && " / month"}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: "5px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            marginTop: "30px",
            position: "relative",
          }}
        >
          {listing?.imageUrls?.slice(0, 5).map((image, i) => (
            <img
              className="hidden md:inline-block"
              key={i}
              src={image}
              alt=""
              style={{
                gridColumn: i === 0 ? "1 / span 3" : `100%`,
                gridRow: i === 0 ? "1 / span 2" : `100%`,
                width: i === 0 ? "100%" : "100%", // Adjust the width here
                height: i === 0 ? "100%" : "260px", // Adjust the height her
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            />
          ))}
          {listing?.imageUrls?.slice(0, 1)?.map((image, i) => (
            <img
              key={i}
              src={image}
              className="inline-block md:hidden"
              alt=""
              style={{
                gridColumn: "1 / span 5",
                gridRow: "1 / span 2",
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            />
          ))}

          <span
            onClick={() => setShowAllImages(true)}
            className="absolute bottom-1 text-sm  right-1 bg-gray-300 px-6 py-2 hidden md:block rounded-lg cursor-pointer hover:opacity-80"
          >
            <div className="flex items-center gap-4">
              <SiPlatformdotsh />

              <span>Show all photos</span>
            </div>
          </span>
          <span
            onClick={() => setShowAllImages(true)}
            className="absolute bottom-1 text-sm  right-1 bg-gray-300 px-6 py-2 block md:hidden rounded-lg cursor-pointer hover:opacity-80"
          >
            1 / {listing?.imageUrls?.length}
          </span>
        </div>
        <div className="mt-10 ">
          <h3 className="text-2xl text-center md:text-start font-semibold">
            About this Place
          </h3>
          <div className="md:w-[50%] px-4 md:px-0 mt-4">
            <span className=" ">{listing?.description}</span>
          </div>
        </div>
        <div className="border-b-[1px] px-10 border-gray-400 md:w-[70%] py-3"></div>
        <div className="mt-10  ">
          <h3 className="text-2xl text-center md:text-start font-semibold">
            Amenities
          </h3>
          <div className="flex border  md:w-fit px-10 items-center justify-center  rounded-3xl mt-4">
            <div className="w-fit px-14 py-8  mt-4 flex flex-col gap-2 ">
              <span className="text-2xl">
                <IoMdBed />
              </span>

              <span className="font-bold capitalize">bedroom</span>
              <span>{listing?.bedrooms} bed</span>
            </div>
            <div>
              <div className="w-fit px-14 py-8 rounded-3xl mt-4 flex flex-col gap-2 ">
                <span className="text-2xl">
                  <LiaToiletSolid />
                </span>

                <span className="font-bold capitalize">bathrooms</span>
                <span>{listing?.bathrooms} baths</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] px-10 border-gray-400 md:w-[70%] py-3"></div>
        <div className="mt-10 ">
          <h3 className="text-2xl text-center md:text-start font-semibold">
            What this place Offers
          </h3>
          <div className=" md:w-[300px] px-8 md:px-0 py-8 grid grid-cols-2 gap-2 ">
            <div className="flex gap-2 items-center">
              {!listing?.wifi ? <IoMdClose /> : <FaCheck />}
              <span>Wifi</span>
            </div>
            <div className="flex gap-2 items-center">
              {!listing?.parking ? <IoMdClose /> : <FaCheck />}
              <span>Parking</span>
            </div>
            <div className="flex gap-2 items-center">
              {!listing?.ac ? <IoMdClose /> : <FaCheck />}
              <span>Ac</span>
            </div>
            <div className="flex gap-2 items-center">
              {!listing?.tv ? <IoMdClose /> : <FaCheck />}
              <span>Tv</span>
            </div>
            <div className="flex gap-2 items-center">
              {!listing?.radio ? <IoMdClose /> : <FaCheck />}
              <span>Radio</span>
            </div>
            <div className="flex gap-2 items-center">
              {!listing?.pets ? <IoMdClose /> : <FaCheck />}
              <span>pets</span>
            </div>
            <div className="flex gap-2 items-center">
              {!listing?.furnished ? <IoMdClose /> : <FaCheck />}
              <span>furnished</span>
            </div>
          </div>
        </div>
        <div className="mb-10 text-center md:text-center">
          {currentUser && listing?.userRef !== currentUser?._id && !contact && (
            <button
              onClick={() => setContact(true)}
              className="bg-slate-800 text-white rounded-lg  uppercase hover:opacity-95  p-3 px-20"
            >
              Contact Landlord
            </button>
          )}

          {contact && <Contact listing={listing} />}
        </div>
      </main>
      {showAllImages && (
        <ShowAllImage
          listingImages={listing?.imageUrls}
          setShowAllImages={setShowAllImages}
        />
      )}
    </div>
  );
};

export default ListingDetails;
