import Italy from "../../src/assets/rome-iStock-508540910.jpg";
import LondonPic from "../../src/assets/popular-places-6.jpg";
import California from "../../src/assets/view-Rome.webp";
import Tokyo from "../../src/assets/tokyoGettyImages-1031467664.webp";
import Paris from "../../src/assets/1D110-Bertrand-Monney.jpg";

interface ImageCardProps {
  imageSrc: string;
  location: string;
  propertyCount: number;
}
const ImageCard = ({ imageSrc, location, propertyCount }: ImageCardProps) => (
  <div className="relative overflow-hidden group inline-block transition-transform transform-gpu duration-300 ease-in-out hover:scale-105">
    <img className="w-[400px] h-[240px] object-cover" src={imageSrc} alt="" />
    <div className="absolute bottom-0 left-0 right-0 h-0 bg-blue-500 transition-all opacity-25 duration-700 origin-left ease-out transform group-hover:h-full"></div>
    <span className="absolute bottom-10 text-white font-bold z-10 left-3 right-0">
      {location}
    </span>
    <span className="absolute bottom-3 text-white z-10 left-3 right-0">
      {propertyCount} Properties
    </span>
  </div>
);
const properties = [
  { imageSrc: LondonPic, location: "United States", propertyCount: 84 },
  { imageSrc: Paris, location: "Paris", propertyCount: 84 },
  { imageSrc: California, location: "Rome", propertyCount: 84 },
  { imageSrc: Tokyo, location: "Tokyo", propertyCount: 84 },
];

const MostPopularPlaces = () => {
  return (
    <div className="bg-slate-50 h-fit">
      <div className="pt-32 px-6 flex flex-col">
        <span className="text-xl font-semibold text-blue-500">
          Find Your City
        </span>
        <span className="text-4xl font-bold uppercase">
          Most Popular <span className="text-blue-700 font-bold">Place</span>{" "}
        </span>
      </div>

      <div className="md:flex-row flex flex-col py-16 px-8 items-center justify-center">
        <div className="relative overflow-hidden group inline-block transition-transform transform-gpu duration-300 ease-in-out hover:scale-105">
          <img
            className="h-[500px] md:w-[450px] object-cover"
            src={Italy}
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-blue-500 transition-all opacity-25 duration-700 origin-left ease-out transform group-hover:h-full"></div>
          <span className="absolute bottom-10 text-white font-bold z-10 left-3 right-0  ">
            Italy
          </span>
          <span className="absolute bottom-3 text-white  z-10 left-3 right-0  ">
            84 Properties
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5 md:ml-8 mt-8 md:mt-0">
          {properties.map((property, index) => (
            <ImageCard key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MostPopularPlaces;
