const express = require("express");
const router = express.Router();
const {
  getContributor,
  setContributor,
  updateContributor,
  deleteContributor,
} = require("../controllers/contributorController");

router
  .route("/:address")
  .get(getContributor)
  .post(setContributor)
  .put(updateContributor)
  .delete(deleteContributor);

module.exports = router;
