import { IoPersonOutline } from "react-icons/io5";
import { GiBank } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";

const WhyUs = () => {
  return (
    <div className="h-fit bg-neutral-200 pb-11">
      <div className="p-10 ">
        <h1 className="text-blue-500 font-semibold">Our Expertise</h1>
        <span className="uppercase text-3xl font-bold">
          Why Choose <span className="text-blue-500">Us</span>
        </span>
      </div>
      <div className=" px-4  md:flex-row flex flex-col gap-5 justify-center items-center">
        <div className="flex md:w-[350px]  bg-white shadow-lg  md:h-fit px-8 py-10 rounded-lg gap-4">
          <div>
            <IoPersonOutline className="text-5xl text-blue-500" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-sm">Personalized Service Possible</h1>
            <span className="text-sm text-gray-500">
              Discover a tailored real estate experience with our personalized
              service. At our agency, we prioritize your unique needs, guiding
              you through a seamless journey to find the perfect home.
            </span>
          </div>
        </div>
        <div className="flex md:w-[350px]  bg-white shadow-lg p md:h-fit px-8 py-10  rounded-lg gap-4 overflow-hidden">
          <div>
            <IoMdHome className="text-5xl text-blue-500" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-sm">Luxury Real Estate Experts</h1>
            <span className="text-sm text-gray-500">
              As luxury real estate experts, we redefine opulence in every
              transaction. With an unwavering commitment to excellence, our
              seasoned professionals curate unparalleled experiences
            </span>
          </div>
        </div>
        <div className="flex md:w-[350px] bg-white shadow-lg  md:h-fit px-8 py-10 overflow-hidden rounded-lg gap-4">
          <div>
            <GiBank className="text-5xl text-blue-500" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-sm">
              Modern Building For Rent $ Sell
            </h1>
            <span className="text-sm text-gray-500">
              Explore contemporary living with our selection of modern buildings
              available for rent and sale. From sleek designs to cutting-edge
              amenities, our listings embody the essence of modern lifestyle.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
