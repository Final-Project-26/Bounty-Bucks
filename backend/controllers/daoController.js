const asyncHandler = require("express-async-handler");

const Dao = require("../models/daoModel");

// @desc Get Dao
// @route GET /api/Dao
// @access public

const getDao = asyncHandler(async (req, res) => {
  const Dao = await Dao.find({ address: "address" });

  res.status(200).json(Dao);
});

// @desc Set Dao
// @route POST /api/Dao
// @access public

const setDao = asyncHandler(async (req, res) => {
  const Dao = await Dao.create({
    address: req.body.address,
    members: req.body.orgs,
    bounties: req.body.bounties,
  });
  res.status(200).json(Dao);
});

// @desc Update Daoacter
// @route PUT /api/Daoacters
// @access public

const updateDao = asyncHandler(async (req, res) => {
  const Dao = await Dao.find({ address: "address" });

  const updatedDao = await Dao.update(req.body, {
    new: true,
  });
  res.status(200).json(updatedDao);
});

// @desc Delete Daoacter
// @route DELETE /api/Daoacters
// @access public

const deleteDao = asyncHandler(async (req, res) => {
  const Dao = await Dao.find({ address: "address" });

  await Dao.remove();

  res.status(200).json({ address: req.params.address });
});

module.exports = {
  getDao,
  setDao,
  updateDao,
  deleteDao,
};
