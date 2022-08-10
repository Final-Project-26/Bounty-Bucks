const mongoose = require("mongoose");

const daoSchema = mongoose.Schema(
  {
    address: {
      type: String,
      required: ["true"],
    },
    members: {
      type: Array,
      required: ["true"],
    },
    bounties: {
      type: Array,
      required: ["true"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dao", daoSchema);
