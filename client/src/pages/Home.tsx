import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import firstBg from "../../src/assets/avi-werde-hHz4yrvxwlA-unsplash.jpg";
import secondBg from "../../src/assets/ismael-paramo-k-kgbt9rLuM-unsplash.jpg";
import thridBg from "../../src/assets/florian-schmidinger-b_79nOqf95I-unsplash.jpg";
import fourthBg from "../../src/assets/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg";
import fifthBg from "../../src/assets/spacejoy-xkJ2_THgKmk-unsplash.jpg";
import FeaturedProperties from "../components/FeaturedProperties";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhyUs from "./WhyUs";
import MostPopularPlaces from "../components/MostPopularPlaces";
import Numbers from "../components/Numbers";
import MeetOurTeam from "../components/MeetOurTeam";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  SwiperCore.use([Navigation]);
  const bgImages = [firstBg, secondBg, thridBg, fourthBg, fifthBg];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <>
      <div className="relative">
        <Swiper
          navigation
          speed={1200}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {bgImages.map((bgImage, index) => (
            <div>
              <SwiperSlide key={index}>
                <div
                  style={{
                    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage}) center no-repeat`,
                    backgroundSize: "cover",
                    height: "80vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <form className="flex items-center justify-center  z-20 h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" flex flex-col md:flex-row gap-3 ">
            <div>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="rounded-lg py-4 px-4 w-[250px] md:w-[550px] text-md"
                placeholder="What are you looking for?"
              />
            </div>
            <div
              onClick={handleSubmit}
              className="bg-blue-700 cursor-pointer px-14 py-4 text-white w-fit "
            >
              <button>Search</button>
            </div>
          </div>
        </form>
      </div>

      <FeaturedProperties />
      <WhyUs />
      <MostPopularPlaces />
      <Numbers />
      <MeetOurTeam />
      <Testimonials />
    </>
  );
};

export default Home;
