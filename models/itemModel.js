const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
