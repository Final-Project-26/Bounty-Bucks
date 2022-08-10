const express = require("express");
const router = express.Router();
const {
  getDao,
  setDao,
  updateDao,
  deleteDao,
} = require("../controllers/daoController");

router.route("/:id").get(getDao).post(setDao).put(updateDao).delete(deleteDao);

module.exports = router;
