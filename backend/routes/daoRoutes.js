const express = require("express");
const router = express.Router();
const {
  getDao,
  setDao,
  updateDao,
  deleteDao,
} = require("../controllers/daoController");

router.route("/").post(setDao);

router.route("/:address").get(getDao).put(updateDao).delete(deleteDao);

module.exports = router;
