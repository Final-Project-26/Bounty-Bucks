const asyncHandler = require("express-async-handler");

const Contributor = require("../models/contributorModel");

// @desc Get Contributor
// @route GET /api/Contributor
// @access public

const getContributor = asyncHandler(async (req, res) => {
  const contributor = await Contributor.find(req.params);

  res.status(200).json(contributor);
});

// @desc Set Contributor
// @route POST /api/Contributor
// @access public

const setContributor = asyncHandler(async (req, res) => {
  const contributor = await Contributor.create({
    address: req.body.address,
    orgs: req.body.orgs,
    bounties: req.body.bounties,
  });
  res.status(200).json(contributor);
});

// @desc Update Contributoracter
// @route PUT /api/Contributoracters
// @access public

const updateContributor = asyncHandler(async (req, res) => {
  const contributor = await Contributor.findOneAndUpdate(req.params, req.body, {
    new: true,
  });
  res.status(200).json(contributor);
});

// @desc Delete Contributoracter
// @route DELETE /api/Contributoracters
// @access public

const deleteContributor = asyncHandler(async (req, res) => {
  const contributor = await Contributor.findOneAndRemove(req.params);

  res.status(200).json(req.params);
});

module.exports = {
  getContributor,
  setContributor,
  updateContributor,
  deleteContributor,
};
