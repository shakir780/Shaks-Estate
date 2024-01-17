import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(401, "Listing not found"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let furnished = req.query.furnished;
    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }
    let wifi = req.query.wifi;
    if (wifi === undefined || wifi === "false") {
      wifi = { $in: [false, true] };
    }
    let parking = req.body.parking;
    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }
    let tv = req.query.tv;
    if (tv === undefined || tv === "false") {
      tv = { $in: [false, true] };
    }
    let pets = req.query.pets;
    if (pets === undefined || pets === "false") {
      pets = { $in: [false, true] };
    }
    let ac = req.query.ac;
    if (ac === undefined || ac === "false") {
      ac = { $in: [false, true] };
    }
    let radio = req.query.radio;
    if (radio === undefined || radio === "false") {
      radio = { $in: [false, true] };
    }
    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }
    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.sort || "desc";

    const listings = await Listing.find({
      title: { $regex: searchTerm, $options: "i" },
      furnished,
      wifi,
      parking,
      tv,
      pets,
      ac,
      radio,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);
    console.log("Listings:", listings);
    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};