import avatar1 from "../../src/assets/avatar-11.png";
import avatar2 from "../../src/assets/avatar-13.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css/bundle";
const Testimonials = () => {
  return (
    <div className="h-fit pb-20 bg-gray-300">
      <div className="text-xl pt-20 px-8   flex flex-col">
        <span className="text-blue-500">Testimonials</span>
        <span className="uppercase text-3xl font-bold">
          Customer <span className="text-blue-500">Reviews</span>
        </span>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center mt-[50px] gap-[20px] px-20 ">
        <div className="md:h-[270px] md:w-[500px] w-[300px] py-4  bg-white rounded-lg">
          <div className="flex p-2 pt-8 gap-4 items-center">
            <span className="relative">
              <img
                className="h-[80px] w-[80px] rounded-full object cover"
                src={avatar2}
                alt=""
              />
              <div className="absolute bottom-0 right-[-2px] text-white bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center ">
                <span className="text-xl">
                  <RiDoubleQuotesR />
                </span>
              </div>
            </span>
            <div className="flex flex-col">
              <span className="font-bold">Micheal Scott</span>
              <span>Consultant</span>
            </div>
          </div>
          <span className="mt-5 flex items-center px-8 text-md">
            "As a first-time homebuyer, I was initially overwhelmed by the
            complexity of the real estate journey.Shaks Estate not only guided
            me through every step but also took the time to understand my
            preferences and priorities."
          </span>
        </div>
        <div className="md:h-[270px] md:w-[500px] w-[300px] py-4  h-full bg-white rounded-lg">
          <div className="flex p-2 pt-8 gap-4 items-center">
            <span className="relative">
              <img
                className="h-[80px] w-[80px] rounded-full object cover"
                src={avatar1}
                alt=""
              />
              <div className="absolute bottom-0 right-[-2px] text-white bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center ">
                <span className="text-xl">
                  <RiDoubleQuotesR />
                </span>
              </div>
            </span>
            <div className="flex flex-col">
              <span className="font-bold">Jacob Smith</span>
              <span>Consultant</span>
            </div>
          </div>
          <span className="mt-5 flex items-center px-8 text-md">
            "I couldn't be happier with the service I received from Shaks Estate
            Company. Their expertise in the real estate market and dedication to
            finding the perfect property for my needs made the entire process
            seamless"
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
