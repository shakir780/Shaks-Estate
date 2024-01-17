import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import firstBg from "../../src/assets/avi-werde-hHz4yrvxwlA-unsplash.jpg";
import secondBg from "../../src/assets/ismael-paramo-k-kgbt9rLuM-unsplash.jpg";
import thridBg from "../../src/assets/florian-schmidinger-b_79nOqf95I-unsplash.jpg";
import fourthBg from "../../src/assets/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg";
import fifthBg from "../../src/assets/spacejoy-xkJ2_THgKmk-unsplash.jpg";
import FeaturedProperties from "../components/FeaturedProperties";

const Home = () => {
  SwiperCore.use([Navigation]);
  const bgImages = [firstBg, secondBg, thridBg, fourthBg, fifthBg];

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
          onSlideChange={(swiper) => {
            const currentIndex = swiper.activeIndex;
            const slides = document.querySelectorAll(".slide-container");
            slides.forEach((slide, index) => {
              if (index === currentIndex) {
                slide.classList.add("active-slide");
              } else {
                slide.classList.remove("active-slide");
              }
            });
          }}
        >
          {bgImages.map((bgImage, index) => (
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
              >
                <div className="flex items-center justify-center h-full">
                  <div className="md:flex grid gap-4 md:gap-0 grid-cols-2 ">
                    <select
                      key={index}
                      id="large"
                      className="block w-[250px] px-4 py-4 text-base text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Any Status</option>
                      <option value="US">For Rent</option>
                      <option value="CA">For Sale</option>
                    </select>
                    <select
                      key={index}
                      id="large"
                      className="block w-[250px] px-4 py-4 text-base text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Bedrooms</option>
                      <option value="US">1</option>
                      <option value="CA">2</option>
                      <option value="CA">3</option>
                      <option value="CA">4</option>
                    </select>
                    <select
                      key={index}
                      id="large"
                      className="block w-[250px] px-4 py-4 text-base text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Bathrooms</option>
                      <option value="US">1</option>
                      <option value="CA">2</option>
                      <option value="CA">3</option>
                      <option value="CA">4</option>
                    </select>

                    <div className="bg-blue-700 px-14 py-4 text-white w-fit ">
                      <button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <FeaturedProperties />
    </>
  );
};

export default Home;
