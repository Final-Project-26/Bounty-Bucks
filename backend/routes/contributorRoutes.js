const express = require("express");
const router = express.Router();
const {
  getContributor,
  setContributor,
  updateContributor,
  deleteContributor,
} = require("../controllers/contributorController");

router.route("/").post(setContributor);

router
  .route("/:address")
  .get(getContributor)
  .put(updateContributor)
  .delete(deleteContributor);

module.exports = router;
