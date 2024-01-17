import mongoose from "mongoose";
const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    wifi: {
      type: Boolean,
      require: true,
    },
    parking: {
      type: Boolean,
      require: true,
    },
    tv: {
      type: Boolean,
      require: true,
    },
    radio: {
      type: Boolean,
      require: true,
    },
    pets: {
      type: Boolean,
      require: true,
    },
    furnished: {
      type: Boolean,
      require: true,
    },
    ac: {
      type: Boolean,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    bedrooms: {
      type: Number,
      require: true,
    },
    bathrooms: {
      type: Number,
      require: true,
    },

    regularPrice: {
      type: Number,
      required: true,
    },

    imageUrls: {
      type: Array,
      require: true,
    },
    userRef: {
      type:String,
      require: true,
    },
  },
  { timestamps: true }
);
const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
