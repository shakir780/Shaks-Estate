import { useRef, useState } from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

interface listingspProps {
  listings: {
    type: boolean;
    imageUrls: string[];
    title: string;
    _id: string;
    address: string;
    bedrooms: string;
    bathrooms: string;
    description: string;
  }[];
}
SwiperCore.use([Navigation]);

const ListingItem = ({ listings }: listingspProps) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // const originalCard = listings[0]; // Assuming there is a single card in listings
  // const duplicatedListings = [...Array(1)].map(() => originalCard);

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  return (
    <>
      <div className="relative group  flex gap-2 px-10 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance using ref
        >
          {listings.map((listing, i) => (
            <SwiperSlide>
              <Link
                key={i}
                to={`/listing/${listing?._id}`}
                onMouseEnter={() => {
                  setIsHovered(i);
                }}
                onMouseLeave={() => setIsHovered(null)}
                className="group cursor-pointer   shadow-md mx-8 mt-10 hover:shadow-lg transition-shadow   "
              >
                <div className="bg-white relative">
                  <span className="absolute bg-blue-500 px-6 py-1 font-semibold text-sm text-center ml-4 my-3 uppercase text-white">
                    for {listing?.type}
                  </span>
                  <img
                    src={listing?.imageUrls[0]}
                    alt={listing?.imageUrls[0]}
                    className="h-[320px] sm:h-[420px]  w-full object-cover hover:scale-95 transition-scale duration-300"
                  />
                  <div
                    className={`py-3 px-4 flex flex-col gap-3  w-full mx-4 ${
                      isHovered === i ? "opacity-0" : "opacity-100"
                    }  text-gray-700`}
                  >
                    <p className="truncate text-lg font-semibold capitalize text-slate-700">
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
                  {isHovered === i && (
                    <div className="overlay absolute inset-0 bg-blue-900 bg-opacity-50 gap-4 flex items-center justify-center ease-in-out">
                      <motion.div
                        className="self-end font-semibold pb-10 px-4 bg-blue-950 bg-opacity-50 "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <motion.p className="text-white pb-2 py-2">
                          {listing.title}
                        </motion.p>
                        <motion.div
                          className="flex gap-2 items-center text-white pb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <IoLocationSharp />
                          <span>{listing?.address}</span>
                        </motion.div>
                        <motion.span
                          className="text-white "
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          {listing.description.length > 100 // Adjust the length as needed
                            ? `${listing.description.substring(0, 100)}...`
                            : listing.description}
                        </motion.span>
                        <motion.div
                          className="flex gap-6 items-center mx-1 mt-4 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        >
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
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={goPrev}
          className="px-4 py-2 bg-white border rounded-l-lg text-blue-500 text-xl"
        >
          <MdOutlineNavigateBefore />
        </button>
        <button
          onClick={goNext}
          className="px-4 py-2 bg-white rounded-r-lg text-blue-500 text-xl"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </>
  );
};

export default ListingItem;
