import { useEffect, useState } from "react";
import SearchResults from "../components/SearchResults";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const fetchListing = async () => {
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing?${searchQuery}`);
      const data = await res.json();
      setListings(data);
    };
    fetchListing();
  }, [location.search]);

  const [sidebarData, setSideBarData] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    wifi: false,
    tv: false,
    pets: false,
    radio: false,
    ac: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSideBarData({ ...sidebarData, type: e.target.id });
    }
    if (e.target.id === "searchTerm") {
      setSideBarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "wifi" ||
      e.target.id === "tv" ||
      e.target.id === "pets" ||
      e.target.id === "radio" ||
      e.target.id === "ac"
    ) {
      setSideBarData({
        ...sidebarData,
        [e.target.id]: e.target.checked,
      });
    }
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingfromUrl = urlParams.get("parking");
    const furnishedfromUrl = urlParams.get("furnished");
    const wififromUrl = urlParams.get("wifi");
    const tvfromUrl = urlParams.get("tv");
    const petsfromUrl = urlParams.get("pets");
    const radiofromUrl = urlParams.get("radio");
    const acfromUrl = urlParams.get("ac");
    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingfromUrl ||
      wififromUrl ||
      tvfromUrl ||
      petsfromUrl ||
      radiofromUrl ||
      acfromUrl
    ) {
      setSideBarData({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "",
        parking: parkingfromUrl === "true" ? true : false,
        wifi: wififromUrl === "true" ? true : false,
        furnished: furnishedfromUrl === "true" ? true : false,
        tv: tvfromUrl === "true" ? true : false,
        pets: petsfromUrl === "true" ? true : false,
        radio: radiofromUrl === "true" ? true : false,
        ac: acfromUrl === "true" ? true : false,
      });
    }
  }, []);
  useEffect(() => {
    // Set the 'type' property to 'all' after the component has mounted
    setSideBarData((prevState) => ({ ...prevState, type: "all" }));
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("type", sidebarData.type);
    urlParams.set("parking", String(sidebarData.parking));
    urlParams.set("wifi", String(sidebarData.wifi));
    urlParams.set("ac", String(sidebarData.ac));
    urlParams.set("tv", String(sidebarData.tv));
    urlParams.set("radio", String(sidebarData.radio));
    urlParams.set("pets", String(sidebarData.pets));
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <div className="flex md:flex-row flex-col bg-neutral-200 ">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen  border-gray-300 w-full md:w-[40%]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <span>Search Term</span>
            <input
              type="text"
              className="rounded-lg py-2 px-4 w-[250px]  text-md"
              value={sidebarData.searchTerm}
              id="searchTerm"
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-5 gap-2 flex-wrap items-center ">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="all"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.type === "all"}
              />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.type === "rent"}
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="sale"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.type === "sale"}
              />
              <span>Sale</span>
            </div>
          </div>

          <div className="flex mt-3 gap-4 flex-wrap items-center ">
            <label className="font-semibold">Perks:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.parking === true}
              />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.furnished === true}
              />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="wifi"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.wifi === true}
              />
              <span>Wifi</span>
            </div>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="tv"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.tv === true}
              />
              <span>Tv</span>
            </div>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="pets"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.pets === true}
              />
              <span>Pets</span>
            </div>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="radio"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.radio === true}
              />
              <span>Radio</span>
            </div>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="ac"
                className="w-5"
                onChange={handleChange}
                checked={sidebarData.ac === true}
              />
              <span>Air Condition</span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg"
          >
            Search
          </button>
        </form>
      </div>
      <div className=" flex-1  w-full">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing Results
        </h1>
        <div>
          <SearchResults listings={listings} />
        </div>
      </div>
    </div>
  );
};

export default Search;
