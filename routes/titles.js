const express = require("express");
const router = express.Router();

const { verifyUserApiKey } = require("../middlewares/apiAuth");
const { getTitles, getTitleDetails } = require("../controllers/titles");

router.get("/get-titles", [verifyUserApiKey, getTitles]);
router.get("/:id", [verifyUserApiKey, getTitleDetails]);

module.exports = router;