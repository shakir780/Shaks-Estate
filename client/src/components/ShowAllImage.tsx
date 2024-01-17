import { IoCloseOutline } from "react-icons/io5";

type Props = {
  listingImages: string[] | undefined;
  setShowAllImages: (show: boolean) => void; // adjust the type as needed
};

const ShowAllImage = ({ listingImages, setShowAllImages }: Props) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-gray-100  p-8 overflow-y-scroll    h-screen w-screen  ">
          <span
            onClick={() => setShowAllImages(false)}
            className="text-3xl cursor-pointer"
          >
            <IoCloseOutline />
          </span>
          <div className="grid grid-cols-1 self-center max-w-2xl mt-5 mx-auto gap-3 ">
            {listingImages?.map((image, i) => (
              <img
                className="w-[800px] h-[500px] "
                key={i}
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAllImage;
