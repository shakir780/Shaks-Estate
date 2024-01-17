/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import Perks from "../components/Perks";

import { DynamicAxios } from "../utils/DynamicAxios";
import PhotoUploader from "../components/PhotoUploader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const InputHeader = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-md mt-4 font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm"> {subTitle}</p>
    </div>
  );
};
const CreateListing = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const [formData, setFormData] = useState({
    imageUrls: [] as string[],

    title: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    parking: false,
    offer: false,
    furnished: false,
    tv: false,
    radio: false,
    ac: false,
    pets: false,
    wifi: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }
    if (
      e.target instanceof HTMLInputElement &&
      (e.target.id === "parking" ||
        e.target.id === "furnished" ||
        e.target.id === "wifi" ||
        e.target.id === "tv" ||
        e.target.id === "pets" ||
        e.target.id === "ac" ||
        e.target.id === "radio")
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }
    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    DynamicAxios("/api/listing/create", "POST", {
      ...formData,
      userRef: currentUser._id,
    })
      .then((data) => {
        if (data.success === false) {
          console.log(data.message);
        } else {
          console.log(data);
          navigate(`/listing/${data._id}`);
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any): void => {
        console.log(error);
      });
  };
  const [sale, setIsSale] = useState(false);

  return (
    <main className="p-3 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-7 ">
        {" "}
        Create a Listing
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-10"
      >
        <div className="flex flex-col gap-4 flex-1">
          <InputHeader
            title="Title"
            subTitle="Title for your place. should be catch as in advertisement"
          />
          <input
            type="text"
            id="title"
            placeholder="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <InputHeader
            title="Description"
            subTitle=" description of the this place"
          />
          <textarea
            id="description"
            value={formData.description}
            placeholder="Description"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <InputHeader title="Address" subTitle="where its located" />
          <input
            placeholder="Address"
            id="address"
            value={formData.address}
            type="text"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <InputHeader
            title="perks"
            subTitle="select all the perks of the place"
          />

          <Perks handleChange={handleChange} formData={formData} />
          <InputHeader
            title="Facilities"
            subTitle="How many bedrooms and bathrooms does it have"
          />
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                value={formData.bedrooms}
                min="1"
                max="10"
                required
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                value={formData.bathrooms}
                min="1"
                max="10"
                required
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Baths</p>
            </div>
          </div>
          <InputHeader title="Type" subTitle="Rent / Sale" />
          <div className="flex gap-3">
            <label className=" items-center border p-4 flex rounded-2xl gap-2  cursor-pointer">
              <input
                type="checkbox"
                name="Sale"
                id="sale"
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.checked) {
                    setIsSale(true);
                  }
                }}
                checked={formData.type === "sale"}
              />

              <span>Sale</span>
            </label>
            <label className=" items-center border p-4 flex rounded-2xl gap-2  cursor-pointer">
              <input
                type="checkbox"
                name="rent"
                id="rent"
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.checked) {
                    setIsSale(false);
                  }
                }}
                checked={formData.type === "rent"}
              />

              <span>Rent</span>
            </label>
          </div>
          <InputHeader title="Prices" subTitle="The prices " />
          <div className="flex items-center gap-2">
            <input
              type="number"
              id="regularPrice"
              value={formData.regularPrice}
              min="50"
              max="1000000"
              required
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <div className="flex flex-col items-center">
              <p>Regular price</p>
              <span className="text-sm text-center">
                {!sale ? "($ / month)" : "$"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <InputHeader
            title="Images"
            subTitle="  The first image will be the cover (min 6)"
          />

          <PhotoUploader setFormData={setFormData} formData={formData} />
          <button
            type="submit"
            className="p-3 bg-slate-800 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
