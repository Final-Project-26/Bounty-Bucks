const mongoose = require("mongoose");

const daoSchema = mongoose.Schema(
  {
    address: {
      type: String,
    },
    members: {
      type: Array,
    },
    bounties: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dao", daoSchema);
