const asyncHandler = require("express-async-handler");

const Dao = require("../models/daoModel");

// @desc Get Dao
// @route GET /api/Dao
// @access public

const getDao = asyncHandler(async (req, res) => {
  const dao = await Dao.find(req.params);

  res.status(200).json(dao);
});

// @desc Set Dao
// @route POST /api/Dao
// @access public

const setDao = asyncHandler(async (req, res) => {
  const dao = await Dao.create({
    address: req.body.address,
    members: req.body.members,
    bounties: req.body.bounties,
  });
  res.status(200).json(dao);
});

// @desc Update Daoacter
// @route PUT /api/Daoacters
// @access public

const updateDao = asyncHandler(async (req, res) => {
  const dao = await Dao.findOneAndUpdate(req.params, req.body, {
    new: true,
  });
  res.status(200).json(dao);
});

// @desc Delete Daoacter
// @route DELETE /api/Daoacters
// @access public

const deleteDao = asyncHandler(async (req, res) => {
  const dao = await Dao.findOneAndRemove(req.params);

  res.status(200).json(req.params);
});

module.exports = {
  getDao,
  setDao,
  updateDao,
  deleteDao,
};
