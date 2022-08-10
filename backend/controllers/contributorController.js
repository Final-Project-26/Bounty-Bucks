const asyncHandler = require("express-async-handler");

const Contributor = require("../models/contributorModel");

// @desc Get Contributor
// @route GET /api/Contributor
// @access public

const getContributor = asyncHandler(async (req, res) => {
  const Contributor = await Contributor.find({ address: "address" });

  res.status(200).json(Contributor);
});

// @desc Set Contributor
// @route POST /api/Contributor
// @access public

const setContributor = asyncHandler(async (req, res) => {
  const Contributor = await Contributor.create({
    address: req.body.address,
    orgs: req.body.orgs,
    bounties: req.body.bounties,
  });
  res.status(200).json(Contributor);
});

// @desc Update Contributoracter
// @route PUT /api/Contributoracters
// @access public

const updateContributor = asyncHandler(async (req, res) => {
  const Contributor = await Contributor.find({ address: "address" });

  const updatedContributor = await Contributor.update(req.body, {
    new: true,
  });
  res.status(200).json(updatedContributor);
});

// @desc Delete Contributoracter
// @route DELETE /api/Contributoracters
// @access public

const deleteContributor = asyncHandler(async (req, res) => {
  const Contributor = await Contributor.find({ address: "address" });

  await Contributor.remove();

  res.status(200).json({ address: req.params.address });
});

module.exports = {
  getContributor,
  setContributor,
  updateContributor,
  deleteContributor,
};
