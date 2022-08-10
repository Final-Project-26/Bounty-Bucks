const mongoose = require("mongoose");

const contributorSchema = mongoose.Schema(
  {
    address: {
      type: String,
    },
    orgs: {
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

module.exports = mongoose.model("Contributor", contributorSchema);
