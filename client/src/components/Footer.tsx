import { FaFax } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import FooterImg1 from "../../src/assets/avi-werde-hHz4yrvxwlA-unsplash.jpg";
import FooterImg2 from "../../src/assets/azimut2-1121_5145_villa11l_w2.jpg";
import FooterImg3 from "../../src/assets/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg";
import FooterImg4 from "../../src/assets/diosasluxuryvillas_chloe1.jpg";
import FooterImg5 from "../../src/assets/florian-schmidinger-b_79nOqf95I-unsplash.jpg";
import FooterImg6 from "../../src/assets/popular-places-1.jpg";
const Footer = () => {
  return (
    <div className="bg-blue-500 h-fit pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 pt-16 px-16 gap-9 ">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold text-2xl uppercase">
              Shaks Estate
            </span>
            <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
            <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
          </div>
          <span className="text-gray-300">
            Welcome to Shaks Estate – Your Trusted Partner in Real Estate
            Excellence. At Shaks Estate, we redefine the art of property
            acquisition, offering a seamless experience that transcends
            expectations. Our commitment to integrity, expertise, and
            personalized service sets us apart in the real estate industry.
            Whether you're buying, selling, or investing, Shaks Estate is your
            compass in navigating the exciting journey of real estate. Discover
            a world of possibilities with Shaks Estate – Where Your
            Homeownership Dreams Take Root
          </span>
        </div>
        <div className="md:pl-8">
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold text-lg uppercase">
              Contact Info
            </span>
            <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
            <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
          </div>
          <div className="flex flex-col mt-6 gap-4">
            <div className="flex gap-2 items-center">
              <div className="text-white bg-blue-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <FaLocationDot />
              </div>
              <span className="text-white">Address: 44 New Design Street</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-white bg-blue-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <MdOutlineMessage />
              </div>
              <span className="text-white">info@shaksEstate.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-white bg-blue-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <IoCallSharp />
              </div>
              <span className="text-white">+477 856 785</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-white bg-blue-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <FaFax />
              </div>
              <span className="text-white">+0477 85X6 552</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold text-lg uppercase">
              Our Gallery
            </span>
            <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
            <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-10">
            <span>
              {" "}
              <img
                src={FooterImg1}
                className="w-[100px] h-[100px] rounded-lg"
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src={FooterImg2}
                className="w-[100px] h-[100px] rounded-lg"
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src={FooterImg3}
                className="w-[100px] h-[100px] rounded-lg"
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src={FooterImg4}
                className="w-[100px] h-[100px] rounded-lg"
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src={FooterImg5}
                className="w-[100px] h-[100px] rounded-lg"
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src={FooterImg6}
                className="w-[100px] h-[100px] rounded-lg"
              />{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
