import { useEffect, useState } from "react";
import ListingItem from "./ListingItem";

const FeaturedProperties = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listing`);
        const data = await res.json();
        setListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListing();
  }, []);
  return (
    <div className=" bg-neutral-300 h-fit pb-20">
      <div className="text-3xl pt-10 px-8 font-bold uppercase">
        <span className="">
          Featured <span className="text-blue-500">Properties</span>
        </span>
      </div>
      <div className="w-full ">
        <ListingItem listings={listings} />
      </div>
    </div>
  );
};

export default FeaturedProperties;
