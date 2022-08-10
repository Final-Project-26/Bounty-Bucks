const mongoose = require("mongoose");

const contributorSchema = mongoose.Schema(
  {
    address: {
      type: String,
      required: ["true"],
    },
    orgs: {
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

module.exports = mongoose.model("Contributor", contributorSchema);
