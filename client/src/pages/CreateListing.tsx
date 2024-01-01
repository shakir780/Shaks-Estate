import Perks from "../components/Perks";

const InputHeader = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <h2 className="text-md mt-4 font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm"> {subTitle}</p>
    </>
  );
};
const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-7 ">
        {" "}
        Create a Listing
      </h1>
      <form className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4 flex-1">
          <InputHeader
            title="Title"
            subTitle="Title for your place. should be catch as in advertisement"
          />
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            className="border p-3 rounded-lg"
          />
          <InputHeader
            title="Description"
            subTitle=" description of the this place"
          />
          <textarea
            name=""
            id="description"
            placeholder="Description"
            className="border p-3 rounded-lg"
          ></textarea>
          <InputHeader title="Address" subTitle="where its located" />
          <input
            placeholder="Address"
            id="address"
            type="text"
            className="border p-3 rounded-lg"
          />
          <InputHeader
            title="perks"
            subTitle="  select all the perks of the place"
          />
          <Perks />
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min="50"
                max="1000000"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-sm text-center">($ / month)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discountPrice"
                min="0"
                max="10000000"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Discounted price</p>
                <span className="text-sm text-center">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <InputHeader
            title="Images"
            subTitle="  The first image will be the cover (max 6)"
          />
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              type="button"
              className="p-3 text-blue-700 border border-blue-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
