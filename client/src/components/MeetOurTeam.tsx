import { useState } from "react";
import { motion } from "framer-motion";
import avatar1 from "../../src/assets/avatar-11-removebg-preview.png";
import avatar2 from "../../src/assets/avatar-12-removebg-preview.png";
import avatar3 from "../../src/assets/avatar-13-removebg-preview.png";
import avatar4 from "../../src/assets/avatar-14-removebg-preview.png";
import {
  FaFacebook,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const fakeDataArray = [
  {
    cardKey: 1,
    isHovered: false,
    imageSrc: avatar1, // Replace with your image URLs
    alt: "John Doe",
    name: "John Doe",
    title: "Web Developer",
  },
  {
    cardKey: 2,
    isHovered: false,
    imageSrc: avatar2, // Replace with your image URLs
    alt: "Micheal Nelson",
    name: "Micheal Nelson",
    title: "Graphic Designer",
  },
  {
    cardKey: 3,
    isHovered: false,
    imageSrc: avatar3, // Replace with your image URLs
    alt: "Kim Lee",
    name: "Kim Lee",
    title: "Hr Manager",
  },
  {
    cardKey: 4,
    isHovered: false,
    imageSrc: avatar4, // Replace with your image URLs
    alt: "Martin Smith",
    name: "Martin Smith",
    title: "Office Manager",
    socialIcons: ["📱", "✉️", "🌐"],
  },
  // Add more fake data as needed
];
interface HoverCardProps {
  isHovered: boolean;
  onMouseEnter: (cardKey: number) => void;

  onMouseLeave: (cardKey: number) => void;
  imageSrc: string;
  alt: string;
  name: string;
  title: string;
  cardKey: number;
}

const HoverCard: React.FC<HoverCardProps> = ({
  cardKey,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  imageSrc,
  alt,
  name,
  title,
}) => {
  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(cardKey);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave(cardKey);
  };
  return (
    <div
      key={cardKey}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[380px] w-[300px] rounded-lg relative "
      style={{
        background: "white",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {isHovered ? (
        <motion.div
          className="ease-in-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
        >
          <div className="flex flex-col items-center justify-center gap-4 absolute inset-0">
            <img
              className="duration-100 h-[380px] w-full"
              src={imageSrc}
              alt={alt}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="overlay absolute inset-0 bg-blue-900 bg-opacity-25   ease-in-out"></div>
          <div className="bottom-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-4 justify-center items-center font-extrabold">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white"
            >
              {name}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white"
            >
              {title}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-2 text-white cursor-pointer text-2xl"
            >
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaGooglePlusG />
              </span>
              <span>
                <FaYoutube />
              </span>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div className="flex flex-col items-center justify-center gap-4 ">
          <img
            className="duration-100 h-[240px] w-[200px] rounded-full object-cover mt-10"
            src={imageSrc}
            alt={alt}
          />
          <span className="font-bold">{name}</span>
          <span>{title}</span>
        </motion.div>
      )}
    </div>
  );
};

const MeetOurTeam = () => {
  const [hoveredCardKey, setHoveredCardKey] = useState<number | null>(null);

  const handleMouseEnter = (cardKey: number) => {
    setHoveredCardKey(cardKey);
  };

  const handleMouseLeave = () => {
    setHoveredCardKey(null);
  };
  return (
    <div className="h-fit bg-orange-100 pb-10 ">
      <div className="text-xl pt-20 px-8   flex flex-col">
        <span className="text-blue-500">Our Professionals</span>
        <span className="uppercase text-3xl font-bold">
          Meet Our <span className="text-blue-500">Team</span>
        </span>
      </div>

      <div className="px-10 mt-10 flex md:flex-row flex-col gap-4 items-center justify-center">
        {fakeDataArray.map((cardData) => (
          <HoverCard
            key={cardData.cardKey}
            {...cardData}
            isHovered={cardData.cardKey === hoveredCardKey}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
